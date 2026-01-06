///| D1 Database FFI Bindings for Cloudflare Workers
///| Based on sol_sqlite pattern, adapted for D1

// =============================================================================
// D1 Database FFI - JavaScript bindings for Cloudflare D1
// =============================================================================

// Note: D1 database is passed via env binding in Cloudflare Workers
// globalThis.__D1_DB is set by the worker entry point

///| Get all published blog posts
pub extern "js" fn db_get_published_posts() -> @core.Promise[@core.Any] =
  #| async () => {
  #|   const db = globalThis.__D1_DB;
  #|   if (!db) throw new Error('D1 database not initialized');
  #|   const r = await db.prepare("SELECT * FROM posts WHERE status = 'published' ORDER BY published_at DESC").all();
  #|   return r.results;
  #| }

///| Get all posts (for admin)
pub extern "js" fn db_get_all_posts() -> @core.Promise[@core.Any] =
  #| async () => {
  #|   const db = globalThis.__D1_DB;
  #|   if (!db) throw new Error('D1 database not initialized');
  #|   const r = await db.prepare("SELECT * FROM posts ORDER BY updated_at DESC").all();
  #|   return r.results;
  #| }

///| Get a single blog post by slug
pub extern "js" fn db_get_post_by_slug(slug : String) -> @core.Promise[@core.Any] =
  #| async (slug) => {
  #|   const db = globalThis.__D1_DB;
  #|   if (!db) throw new Error('D1 database not initialized');
  #|   return await db.prepare("SELECT * FROM posts WHERE slug = ?").bind(slug).first();
  #| }

///| Get a single blog post by id
pub extern "js" fn db_get_post_by_id(id : String) -> @core.Promise[@core.Any] =
  #| async (id) => {
  #|   const db = globalThis.__D1_DB;
  #|   if (!db) throw new Error('D1 database not initialized');
  #|   return await db.prepare("SELECT * FROM posts WHERE id = ?").bind(id).first();
  #| }

///| Create a new post
pub extern "js" fn db_create_post(
  title : String,
  slug : String,
  content : String,
  content_html : String,
  excerpt : String,
  status : String
) -> @core.Promise[@core.Any] =
  #| async (title, slug, content, content_html, excerpt, status) => {
  #|   const db = globalThis.__D1_DB;
  #|   if (!db) throw new Error('D1 database not initialized');
  #|   const published_at = status === 'published' ? new Date().toISOString() : null;
  #|   return await db.prepare(
  #|     "INSERT INTO posts (title, slug, content, content_html, excerpt, status, published_at) VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING *"
  #|   ).bind(title, slug, content, content_html, excerpt, status, published_at).first();
  #| }

///| Update an existing post
pub extern "js" fn db_update_post(
  id : String,
  title : String,
  slug : String,
  content : String,
  content_html : String,
  excerpt : String,
  status : String
) -> @core.Promise[@core.Any] =
  #| async (id, title, slug, content, content_html, excerpt, status) => {
  #|   const db = globalThis.__D1_DB;
  #|   if (!db) throw new Error('D1 database not initialized');
  #|   return await db.prepare(
  #|     "UPDATE posts SET title = ?, slug = ?, content = ?, content_html = ?, excerpt = ?, status = ? WHERE id = ? RETURNING *"
  #|   ).bind(title, slug, content, content_html, excerpt, status, id).first();
  #| }

///| Delete a post
pub extern "js" fn db_delete_post(id : String) -> @core.Promise[@core.Any] =
  #| async (id) => {
  #|   const db = globalThis.__D1_DB;
  #|   if (!db) throw new Error('D1 database not initialized');
  #|   return await db.prepare("DELETE FROM posts WHERE id = ?").bind(id).run();
  #| }

// =============================================================================
// Data Access Helpers
// =============================================================================

///| Extract string field from JS object
pub extern "js" fn get_str(obj : @core.Any, field : String) -> String =
  #| (obj, field) => obj && obj[field] != null ? String(obj[field]) : ""

///| Extract int field from JS object
pub extern "js" fn get_int(obj : @core.Any, field : String) -> Int =
  #| (obj, field) => obj && obj[field] != null ? Number(obj[field]) : 0

///| Check if JS value is null/undefined
pub extern "js" fn is_null(obj : @core.Any) -> Bool =
  #| (obj) => obj == null

///| Get array length
pub extern "js" fn array_len(arr : @core.Any) -> Int =
  #| (arr) => Array.isArray(arr) ? arr.length : 0

///| Get array element
pub extern "js" fn array_get(arr : @core.Any, idx : Int) -> @core.Any =
  #| (arr, idx) => arr[idx]

///| Get current timestamp
pub extern "js" fn get_timestamp() -> String =
  #| () => new Date().toISOString()

// =============================================================================
// Post Data Structure Helpers
// =============================================================================

///| Post record structure
pub struct Post {
  id : String
  title : String
  slug : String
  content : String
  content_html : String
  excerpt : String
  status : String
  published_at : String
  created_at : String
  updated_at : String
}

///| Convert JS object to Post
pub fn post_from_js(obj : @core.Any) -> Post {
  {
    id: get_str(obj, "id"),
    title: get_str(obj, "title"),
    slug: get_str(obj, "slug"),
    content: get_str(obj, "content"),
    content_html: get_str(obj, "content_html"),
    excerpt: get_str(obj, "excerpt"),
    status: get_str(obj, "status"),
    published_at: get_str(obj, "published_at"),
    created_at: get_str(obj, "created_at"),
    updated_at: get_str(obj, "updated_at"),
  }
}
