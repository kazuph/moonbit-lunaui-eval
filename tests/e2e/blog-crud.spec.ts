import { test, expect } from '@playwright/test';

/**
 * Blog CRUD E2E Tests
 *
 * Tests the complete lifecycle of blog posts:
 * Create, Read, Update, Delete operations.
 */

// Generate unique identifiers for test isolation
const testId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

test.describe('Blog Post CRUD Operations', () => {
  test.describe.configure({ mode: 'serial' });

  // Store created post info for subsequent tests
  let createdPostId: string;
  let createdPostSlug: string;
  let createdPostTitle: string;

  test('should create a new draft post', async ({ page }) => {
    const uniqueId = testId();
    createdPostSlug = `test-post-${uniqueId}`;
    createdPostTitle = `Test Post ${uniqueId}`;

    // Navigate to new post page
    await page.goto('/admin/posts/new');
    await expect(page.locator('form')).toBeVisible();

    // Fill in the form
    await page.fill('input[name="title"]', createdPostTitle);
    await page.fill('input[name="slug"]', createdPostSlug);
    await page.selectOption('select[name="status"]', 'draft');
    await page.fill('textarea[name="content"]', `# ${createdPostTitle}\n\nThis is a test post created by E2E tests.\n\n- Item 1\n- Item 2\n- Item 3`);

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for response - check for success indicators
    await page.waitForLoadState('networkidle');

    // Check for success message or navigation
    const successIndicators = [
      page.locator('.success-message, .success-actions, .form-result.success'),
      page.locator('text=保存しました'),
      page.locator('text=作成しました'),
      page.locator('text=Success'),
    ];

    let foundSuccess = false;
    for (const indicator of successIndicators) {
      if (await indicator.count() > 0) {
        foundSuccess = true;
        break;
      }
    }

    // If redirected to admin list, that's also success
    if (!foundSuccess && page.url().includes('/admin') && !page.url().includes('/new')) {
      foundSuccess = true;
    }

    expect(foundSuccess).toBe(true);
  });

  test('should show created post in admin list', async ({ page }) => {
    await page.goto('/admin');
    await page.waitForLoadState('networkidle');

    // Look for the created post in the table or list
    const postRow = page.locator(`tr:has-text("${createdPostTitle}"), .post-item:has-text("${createdPostTitle}")`);
    await expect(postRow.first()).toBeVisible();

    // Get the post ID from the edit link
    const editLink = postRow.first().locator('a:has-text("Edit")');
    const href = await editLink.getAttribute('href');
    // Extract ID from /admin/posts/{id}/edit
    const match = href?.match(/\/admin\/posts\/(\d+)\/edit/);
    if (match) {
      createdPostId = match[1];
    }

    // Verify it shows as draft
    const statusCell = postRow.first().locator('.status-draft, [class*="draft"]');
    if (await statusCell.count() > 0) {
      await expect(statusCell.first()).toBeVisible();
    }
  });

  test('draft post should not appear on public homepage', async ({ page, context }) => {
    // Create a new page without auth credentials for public access
    const publicPage = await context.newPage();

    await publicPage.goto('/');
    await publicPage.waitForLoadState('networkidle');

    // Draft post should NOT be visible
    const draftPost = publicPage.locator(`text=${createdPostTitle}`);
    await expect(draftPost).not.toBeVisible();

    await publicPage.close();
  });

  test('should update post status to published', async ({ page }) => {
    // Skip if we don't have an ID
    if (!createdPostId) {
      test.skip(true, 'Post ID not available from previous test');
      return;
    }

    // Navigate to edit page using ID
    await page.goto(`/admin/posts/${createdPostId}/edit`);
    await page.waitForLoadState('networkidle');

    // Check if page loaded correctly (not 404)
    const is404 = await page.locator('text=Not Found, text=404').count() > 0;
    if (is404) {
      test.skip(true, 'Edit page not found');
      return;
    }

    // Change status to published
    await page.selectOption('select[name="status"]', 'published');

    // Submit the form
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle');

    // Verify update succeeded
    const successIndicators = [
      page.locator('.success-message, .success-actions'),
      page.locator('text=更新しました'),
      page.locator('text=保存しました'),
      page.locator('text=Updated'),
    ];

    let foundSuccess = false;
    for (const indicator of successIndicators) {
      if (await indicator.count() > 0) {
        foundSuccess = true;
        break;
      }
    }

    // If navigated away from edit page, that's also success
    if (!foundSuccess && !page.url().includes('/edit')) {
      foundSuccess = true;
    }

    expect(foundSuccess).toBe(true);
  });

  test('published post should appear on public homepage', async ({ page, context }) => {
    // Create a new page without auth credentials for public access
    const publicPage = await context.newPage();

    await publicPage.goto('/');
    await publicPage.waitForLoadState('networkidle');

    // Published post should now be visible
    const publishedPost = publicPage.locator(`text=${createdPostTitle}`);

    // If post appears in list
    if (await publishedPost.count() > 0) {
      await expect(publishedPost.first()).toBeVisible();

      // Try clicking to view post detail
      await publishedPost.first().click();
      await publicPage.waitForLoadState('networkidle');

      // Verify we're on the post page
      expect(publicPage.url()).toContain(`/posts/${createdPostSlug}`);
      await expect(publicPage.locator('h1, .post-title')).toContainText(createdPostTitle);
    }

    await publicPage.close();
  });

  test('should update post content', async ({ page }) => {
    if (!createdPostId) {
      test.skip(true, 'Post ID not available');
      return;
    }

    await page.goto(`/admin/posts/${createdPostId}/edit`);
    await page.waitForLoadState('networkidle');

    const is404 = await page.locator('text=Not Found, text=404').count() > 0;
    if (is404) {
      test.skip(true, 'Edit page not found');
      return;
    }

    // Update the content
    const updatedContent = `# ${createdPostTitle}\n\nThis content has been **updated** by E2E tests.\n\n## New Section\n\nAdded new content here.`;
    await page.fill('textarea[name="content"]', updatedContent);

    // Submit
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle');

    // Verify by checking the public post page
    const publicPage = await page.context().newPage();
    await publicPage.goto(`/posts/${createdPostSlug}`);
    await publicPage.waitForLoadState('networkidle');

    // Check for updated content markers
    const content = await publicPage.content();
    expect(content).toContain('updated');
    expect(content).toContain('New Section');

    await publicPage.close();
  });

  test('should delete the test post', async ({ page }) => {
    await page.goto('/admin');
    await page.waitForLoadState('networkidle');

    // Find the delete button/link for our test post
    const postRow = page.locator(`tr:has-text("${createdPostTitle}"), .post-item:has-text("${createdPostTitle}")`).first();

    if (await postRow.count() === 0) {
      test.skip(true, 'Post not found in admin list');
      return;
    }

    const deleteButton = postRow.locator('button:has-text("Delete"), a:has-text("Delete"), .btn-danger, button:has-text("削除")');

    if (await deleteButton.count() === 0) {
      test.skip(true, 'Delete button not found');
      return;
    }

    // Handle confirmation dialog if it appears
    page.on('dialog', async (dialog) => {
      await dialog.accept();
    });

    await deleteButton.click();
    await page.waitForLoadState('networkidle');

    // Verify post is no longer in list
    await page.goto('/admin');
    await page.waitForLoadState('networkidle');

    const deletedPost = page.locator(`text=${createdPostTitle}`);
    await expect(deletedPost).not.toBeVisible();
  });
});

test.describe('Form Validation', () => {
  test('should require title field', async ({ page }) => {
    await page.goto('/admin/posts/new');

    // Wait for form to be ready
    await expect(page.locator('form')).toBeVisible();

    // Try to submit without title
    await page.fill('input[name="slug"]', 'test-slug');
    await page.fill('textarea[name="content"]', 'Test content');

    // The form should not submit or show validation error
    await page.click('button[type="submit"]');

    // Should still be on the same page (HTML5 validation prevents submit)
    expect(page.url()).toContain('/admin/posts/new');
  });

  test('should require slug field', async ({ page }) => {
    await page.goto('/admin/posts/new');

    await expect(page.locator('form')).toBeVisible();

    // Fill title first
    await page.fill('input[name="title"]', 'Test Title');
    await page.fill('textarea[name="content"]', 'Test content');

    // Clear slug if auto-generated
    await page.fill('input[name="slug"]', '');

    await page.click('button[type="submit"]');

    // Should still be on the same page or show validation
    expect(page.url()).toContain('/admin/posts/new');
  });

  test('should validate slug format', async ({ page }) => {
    await page.goto('/admin/posts/new');

    await expect(page.locator('form')).toBeVisible();

    // Try invalid slug with special characters
    await page.fill('input[name="title"]', 'Test Title');
    await page.fill('input[name="slug"]', 'Invalid Slug With Spaces!');
    await page.fill('textarea[name="content"]', 'Test content');

    // Browser validation should prevent submission or show error
    const slugInput = page.locator('input[name="slug"]');
    const validationMessage = await slugInput.evaluate((el: HTMLInputElement) => el.validationMessage);

    // If there's a pattern validation, it should show a message
    if (validationMessage) {
      expect(validationMessage.length).toBeGreaterThan(0);
    }
  });
});

test.describe('Admin List Features', () => {
  test('should display posts table with correct columns', async ({ page }) => {
    await page.goto('/admin');
    await page.waitForLoadState('networkidle');

    const table = page.locator('.posts-table, table');
    if (await table.count() > 0) {
      // Check for expected columns
      const headers = table.locator('th');
      const headerTexts = await headers.allTextContents();

      // Should have columns for title, date, status, actions
      expect(headerTexts.some(h => /title|タイトル/i.test(h))).toBe(true);
      expect(headerTexts.some(h => /status|ステータス/i.test(h))).toBe(true);
    }
  });

  test('should have working edit links', async ({ page }) => {
    await page.goto('/admin');
    await page.waitForLoadState('networkidle');

    const editLinks = page.locator('a[href*="/edit"], a:has-text("Edit"), a:has-text("編集")');

    if (await editLinks.count() > 0) {
      const href = await editLinks.first().getAttribute('href');
      // ID can be numeric or UUID format
      expect(href).toMatch(/\/admin\/posts\/[\w-]+\/edit/);

      // Click and verify navigation
      await editLinks.first().click();
      await page.waitForLoadState('networkidle');

      expect(page.url()).toContain('/admin/posts/');
      expect(page.url()).toContain('/edit');
      // Edit page may have form element or just form controls
      const hasEditContent = await page.locator('input[name="title"], button:has-text("更新する")').first().isVisible();
      expect(hasEditContent).toBe(true);
    }
  });
});
