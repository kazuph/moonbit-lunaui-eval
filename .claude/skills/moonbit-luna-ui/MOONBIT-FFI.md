# MoonBit FFI パターン集

MoonBitからJavaScriptを呼び出すFFI（Foreign Function Interface）のパターン。

## 基本構文

```moonbit
extern "js" fn function_name(arg1 : Type1, arg2 : Type2) -> ReturnType =
  #| (arg1, arg2) => {
  #|   // JavaScript code
  #|   return result;
  #| }
```

## 型マッピング

| MoonBit型 | JavaScript型 |
|----------|-------------|
| `String` | `string` |
| `Int` | `number` |
| `Bool` | `boolean` |
| `@core.Any` | `any` |
| `@core.Promise[T]` | `Promise<T>` |
| `@js.Any` | `any` (client) |
| `Unit` | `undefined` |

## 同期関数

### 文字列操作

```moonbit
extern "js" fn generate_slug(title : String) -> String =
  #| (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

extern "js" fn safe_excerpt(content : String, max_len : Int) -> String =
  #| (content, maxLen) => {
  #|   if (content.length <= maxLen) return content;
  #|   return content.slice(0, maxLen) + "...";
  #| }

extern "js" fn normalize_newlines(s : String) -> String =
  #| (s) => s.replace(/\\n/g, '\n')
```

### オブジェクト操作

```moonbit
///| 文字列フィールド取得
extern "js" fn get_str(obj : @core.Any, field : String) -> String =
  #| (obj, field) => obj && obj[field] != null ? String(obj[field]) : ""

///| 数値フィールド取得
extern "js" fn get_int(obj : @core.Any, field : String) -> Int =
  #| (obj, field) => obj && obj[field] != null ? Number(obj[field]) : 0

///| null/undefinedチェック
extern "js" fn is_null(obj : @core.Any) -> Bool =
  #| (obj) => obj == null
```

### 配列操作

```moonbit
extern "js" fn array_len(arr : @core.Any) -> Int =
  #| (arr) => Array.isArray(arr) ? arr.length : 0

extern "js" fn array_get(arr : @core.Any, idx : Int) -> @core.Any =
  #| (arr, idx) => arr[idx]
```

### タイムスタンプ

```moonbit
extern "js" fn get_timestamp() -> String =
  #| () => new Date().toISOString()
```

## 非同期関数（Promise）

### D1データベース

```moonbit
extern "js" fn db_get_all_posts() -> @core.Promise[@core.Any] =
  #| async () => {
  #|   const db = globalThis.__D1_DB;
  #|   if (!db) throw new Error('D1 database not initialized');
  #|   const r = await db.prepare("SELECT * FROM posts ORDER BY updated_at DESC").all();
  #|   return r.results;
  #| }

extern "js" fn db_get_post_by_slug(slug : String) -> @core.Promise[@core.Any] =
  #| async (slug) => {
  #|   const db = globalThis.__D1_DB;
  #|   if (!db) throw new Error('D1 database not initialized');
  #|   return await db.prepare("SELECT * FROM posts WHERE slug = ?").bind(slug).first();
  #| }

extern "js" fn db_create_post(
  title : String,
  slug : String,
  content : String,
  content_html : String,
  excerpt : String,
  status : String
) -> @core.Promise[@core.Any] =
  #| async (title, slug, content, content_html, excerpt, status) => {
  #|   const db = globalThis.__D1_DB;
  #|   const published_at = status === 'published' ? new Date().toISOString() : null;
  #|   return await db.prepare(
  #|     "INSERT INTO posts (title, slug, content, content_html, excerpt, status, published_at) VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING *"
  #|   ).bind(title, slug, content, content_html, excerpt, status, published_at).first();
  #| }
```

### Promiseの使用

```moonbit
async fn my_handler(props : @router.PageProps) -> @server_dom.ServerNode {
  @server_dom.ServerNode::async_(async fn() {
    // .wait()でPromiseを待機
    let posts = db_get_all_posts().wait()
    let len = array_len(posts)

    // 結果を使用
    @luna.fragment([...])
  })
}
```

## Hono連携

### フォームボディ取得

```moonbit
extern "js" fn get_form_body_promise(props : @router.PageProps) -> @core.Promise[@core.Any] =
  #| async (props) => {
  #|   const ctx = props.ctx;
  #|   if (!ctx?.req) return {};
  #|   try {
  #|     return await ctx.req.parseBody();
  #|   } catch (e) {
  #|     console.error('Error parsing form:', e);
  #|     return {};
  #|   }
  #| }
```

### リダイレクト

```moonbit
extern "js" fn hono_redirect(_props : @router.PageProps, url : String) -> @core.Any =
  #| (props, url) => new Response(null, {
  #|   status: 302,
  #|   headers: { 'Location': url }
  #| })
```

### JSONレスポンス

```moonbit
extern "js" fn api_json_success(message : String, slug : String) -> @core.Any =
  #| (message, slug) => ({ success: true, message, slug })
```

## クライアント側FFI（Island Component用）

### DOM操作

```moonbit
extern "js" fn redirect_to(url : String) -> Unit =
  #| (url) => { window.location.href = url; }
```

### フォームデータ取得

```moonbit
extern "js" fn get_form_data_from_form(e : @js_dom.FormEvent, post_id : String) -> @js.Any =
  #| (e, postId) => {
  #|   const form = e.target;
  #|   const formData = new FormData(form);
  #|   const data = {};
  #|   formData.forEach((value, key) => { data[key] = value; });
  #|   if (postId) { data.id = postId; }
  #|   return data;
  #| }
```

### レスポンスデータ取得

```moonbit
extern "js" fn get_message(data : @js.Any) -> String =
  #| (data) => data?.message || "成功"

extern "js" fn get_slug(data : @js.Any) -> String =
  #| (data) => data?.slug || ""
```

## globalThis経由のデータ共有

Cloudflare Workers環境でD1データベースをMoonBitコードから使用する場合、
`worker.ts` で `globalThis` に設定。

```typescript
// src/worker.ts
export default {
  fetch: async (request: Request, env: Env, ctx: ExecutionContext) => {
    (globalThis as any).__D1_DB = env.DB;
    // ...
  }
}
```

MoonBitからアクセス：
```moonbit
extern "js" fn db_query() -> @core.Promise[@core.Any] =
  #| async () => {
  #|   const db = globalThis.__D1_DB;
  #|   // ...
  #| }
```

## サーバー vs クライアント

| 場所 | 戻り値型 | 用途 |
|-----|---------|------|
| `app/server/*.mbt` | `@core.Any`, `@core.Promise[T]` | D1, Hono連携 |
| `app/client/*.mbt` | `@js.Any`, `Unit` | DOM操作, イベント |

## よくある問題

### undefined関数エラー

FFI関数はビルド時にJSに変換される。
定義場所（server/client）を確認。

### Promiseが解決されない

`async fn` 内で `.wait()` を忘れずに。

```moonbit
// ❌ NG
let posts = db_get_all_posts()  // Promise未解決

// ✅ OK
let posts = db_get_all_posts().wait()
```

### 型不一致

`@core.Any` と `@js.Any` は異なる型。
サーバーでは `@core`、クライアントでは `@js` を使用。
