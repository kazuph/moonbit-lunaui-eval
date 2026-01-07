import { test, expect } from '@playwright/test';

/**
 * Authentication Flow E2E Tests
 *
 * Tests Basic Auth protection on admin and API routes
 * while verifying public routes remain accessible.
 */

test.describe('Public Routes (No Auth Required)', () => {
  // Override httpCredentials for public route tests
  test.use({ httpCredentials: undefined });

  test('homepage is accessible without authentication', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);

    // Verify homepage content
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.main-nav')).toBeVisible();
  });

  test('blog post pages are accessible without authentication', async ({ page }) => {
    // First, go to homepage and check if there are any posts
    await page.goto('/');

    // Check for post links
    const postLinks = page.locator('.post-card a, a[href^="/posts/"]');
    const count = await postLinks.count();

    if (count > 0) {
      // Click the first post link
      const href = await postLinks.first().getAttribute('href');
      expect(href).toBeTruthy();

      const response = await page.goto(href!);
      expect(response?.status()).toBe(200);

      // Verify post page structure
      await expect(page.locator('.post-content, article, .content').first()).toBeVisible();
    } else {
      // No posts exist yet - just verify the homepage loaded
      test.info().annotations.push({ type: 'skip-reason', description: 'No published posts available' });
    }
  });
});

test.describe('Protected Routes (Auth Required)', () => {
  // Tests without credentials should fail
  // Note: These tests use fetch() directly to bypass Playwright's credential inheritance
  test.describe('Without Credentials', () => {
    test('admin page returns 401 without credentials', async () => {
      // Use native fetch without any credentials
      const response = await fetch('http://localhost:8787/admin');
      expect(response.status).toBe(401);
    });

    test('admin new post page returns 401 without credentials', async () => {
      const response = await fetch('http://localhost:8787/admin/posts/new');
      expect(response.status).toBe(401);
    });

    test('API create post returns 401 without credentials', async () => {
      const response = await fetch('http://localhost:8787/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Unauthorized Post',
          slug: 'unauthorized-post',
          content: 'This should fail',
          status: 'draft',
        }),
      });
      expect(response.status).toBe(401);
    });
  });

  // Tests with valid credentials should succeed
  test.describe('With Valid Credentials', () => {
    // Uses httpCredentials from config

    test('admin page is accessible with valid credentials', async ({ page }) => {
      const response = await page.goto('/admin');
      expect(response?.status()).toBe(200);

      // Verify admin dashboard content
      // h1 is "記事管理" (Manage Posts in Japanese)
      const h1 = page.locator('h1');
      await expect(h1).toBeVisible();
      const h1Text = await h1.textContent() || '';
      // Accept both English and Japanese
      expect(h1Text.toLowerCase().includes('post') || h1Text.includes('記事')).toBe(true);
    });

    test('admin new post page is accessible with valid credentials', async ({ page }) => {
      const response = await page.goto('/admin/posts/new');
      expect(response?.status()).toBe(200);

      // Verify new post form
      await expect(page.locator('form')).toBeVisible();
      await expect(page.locator('input[name="title"]')).toBeVisible();
      await expect(page.locator('textarea[name="content"]')).toBeVisible();
    });

    test('admin edit page handles non-existent post', async ({ page }) => {
      const response = await page.goto('/admin/posts/99999/edit');
      // Server may return 200 with "Not Found" content or 404
      // Accept either behavior as valid
      const status = response?.status();
      expect([200, 404]).toContain(status);

      if (status === 200) {
        // If 200, page should show "Not Found" message or redirect
        const content = await page.content();
        const isNotFoundOrRedirect =
          content.includes('Not Found') ||
          content.includes('not found') ||
          content.includes('見つかりません') ||
          page.url().includes('/admin') && !page.url().includes('/edit');
        expect(isNotFoundOrRedirect).toBe(true);
      }
    });
  });

  // Tests with invalid credentials should fail
  test.describe('With Invalid Credentials', () => {
    test.use({
      httpCredentials: {
        username: 'wronguser',
        password: 'wrongpassword',
      },
    });

    test('admin page returns 401 with invalid credentials', async ({ page }) => {
      const response = await page.goto('/admin');
      expect(response?.status()).toBe(401);
    });

    test('API returns 401 with invalid credentials', async ({ request }) => {
      const response = await request.get('/api/posts');
      expect(response.status()).toBe(401);
    });
  });
});

test.describe('Navigation Between Public and Protected', () => {
  test('can access admin directly with credentials', async ({ page }) => {
    // Test that we can access admin with valid credentials (from config)
    const response = await page.goto('/admin');
    expect(response?.status()).toBe(200);

    // Verify we're on the admin page
    await expect(page.locator('h1')).toBeVisible();
    expect(page.url()).toContain('/admin');
  });
});
