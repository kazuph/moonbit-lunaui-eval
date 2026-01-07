# MoonBit + Luna UI 評価プロジェクト

MoonBitとLuna UI (Sol Framework) を使用したブログ管理ツールの実装評価。

## 技術スタック

- **言語**: MoonBit
- **UIフレームワーク**: Luna UI (Sol Framework)
- **ランタイム**: Cloudflare Workers
- **データベース**: D1 (SQLite)
- **Cloudflare Bindings**: mizchi/cloudflare パッケージ

## 言語比率（アプリケーションコード）

| 言語 | 行数 | 比率 | 用途 |
|------|------|------|------|
| **MoonBit** | 1,799 | **94.7%** | ルーティング、DB、UI、ビジネスロジック |
| TypeScript | 100 | 5.3% | Cloudflare Workerエントリーポイント（認証ラッパー） |

> 🎯 **目標達成**: MoonBit最大化の評価方針に基づき、アプリケーションロジックのほぼ全てをMoonBitで実装。

## セットアップ

```bash
# 依存関係のインストール
pnpm install

# 環境変数の設定
cp .env.example .env
# .envを編集して認証情報を設定

# ビルド
pnpm build

# 開発サーバー起動
pnpm dev

# ブラウザでアクセス
open http://localhost:8787
```

## 認証設定

Basic認証の認証情報は`.env`ファイルで管理：

```bash
BASIC_AUTH_USER=your_username
BASIC_AUTH_PASS=your_secure_password
```

`.dev.vars`は`.env`へのシンボリックリンクです（Wrangler用）。

## E2Eテスト

```bash
pnpm run test:e2e
```

## ディレクトリ構成

```
app/
├── server/          # サーバーサイド（MoonBit）
│   ├── routes.mbt   # ルーティング・ページ・API・Server Actions
│   └── db.mbt       # D1データベースアクセス
├── client/          # クライアントサイド（MoonBit）
│   └── markdown_editor.mbt  # Island Component
└── __gen__/         # 自動生成ファイル

static/              # 静的ファイル（Wranglerが配信）
├── loader.js        # Luna UIハイドレーションスクリプト
└── markdown_editor.js  # ビルド済みクライアントJS

src/
└── worker.ts        # Cloudflare Workerエントリーポイント（認証ラッパー）

tests/e2e/           # E2Eテスト（Playwright）
```

## MoonBit実装率

### JS FFI → MoonBit移行

| カテゴリ | 移行前FFI | 移行後FFI | 削減率 |
|---------|----------|----------|--------|
| データヘルパー | 6 | 0 | 100% |
| 文字列/JSON | 5 | 0 | 100% |
| クライアント | 5 | 3 | 40% |
| フレームワーク連携 | 3 | 0 | 100% |
| D1 SQL | 7 | 1 | **86%** |
| その他 | 0 | 2 | - |
| **合計** | **26** | **6** | **77%** |

> 🎯 **mizchi/cloudflare パッケージ採用**: D1アクセスを本家パッケージに移行し、FFIを7→1に削減

### MoonBit化された機能

- **データアクセス**: `get_str`, `get_int`, `is_null`, `array_len`, `array_get`
- **文字列処理**: `normalize_newlines`, `safe_excerpt`
- **JSON処理**: `parse_json`, `api_json_success`, `action_json_response`
- **URLパース**: `parse_form_urlencoded`, `safe_decode_uri`
- **クライアント**: `get_message`, `get_slug`, `generate_slug`
- **フレームワーク連携**: `parseBody()`, `redirect()` (Sol Framework API使用)

### 残存FFI（6件）詳細

これらのFFIはブラウザ/ランタイムAPIの制約により、MoonBitでの実装が不可能または非推奨。

#### 1. `get_global_db` (server)

**目的**: Cloudflare D1データベースバインディングの取得

```moonbit
extern "js" fn get_global_db() -> @core.Any =
  #| () => {
  #|   const db = globalThis.__D1_DB;
  #|   if (!db) throw new Error('D1 database not initialized');
  #|   return db;
  #| }
```

**なぜFFIが必要か**: Cloudflare Workers の D1 バインディングは `env.DB` から取得する必要がある。Sol Framework の PageProps からは直接 env にアクセスできないため、worker.ts で `globalThis.__D1_DB = env.DB` を設定し、MoonBit側で取得する。取得後は `mizchi/cloudflare` パッケージの型安全なAPIを使用。

#### 2. `get_timestamp` (server)

**目的**: ISO 8601形式の現在時刻を取得

```moonbit
extern "js" fn get_timestamp() -> String =
  #| () => new Date().toISOString()
```

**なぜFFIが必要か**: MoonBitには標準の日時ライブラリがなく、JavaScript の `Date` APIに依存。Cloudflare Workers環境では `new Date()` が唯一の時刻取得手段。

#### 3. `safe_decode_uri` (server)

**目的**: URLエンコードされた文字列のデコード（エラーハンドリング付き）

```moonbit
extern "js" fn safe_decode_uri(s : String) -> String =
  #| (s) => {
  #|   try { return decodeURIComponent(s); }
  #|   catch (e) { return s; }
  #| }
```

**なぜFFIが必要か**: `decodeURIComponent` は不正なエンコーディングで例外を投げる。MoonBitの `@core.try_sync` では戻り値型の制約があり、JavaScript側で例外処理する方が安全。

#### 4. `redirect_to` (client)

**目的**: クライアント側でのページ遷移

```moonbit
extern "js" fn redirect_to(url : String) -> Unit =
  #| (url) => { window.location.href = url; }
```

**なぜFFIが必要か**: `window.location` はブラウザDOM APIであり、MoonBitから直接アクセスできない。Island Component内での画面遷移に使用。

#### 5. `confirm_delete` (client)

**目的**: 削除確認ダイアログの表示

```moonbit
extern "js" fn confirm_delete() -> Bool =
  #| () => window.confirm("この記事を削除しますか？")
```

**なぜFFIが必要か**: `window.confirm` はブラウザのネイティブダイアログAPIであり、MoonBitから直接呼び出せない。ユーザー確認が必要な破壊的操作で使用。

#### 6. `get_form_data_from_form` (client)

**目的**: フォーム要素からFormDataオブジェクトを取得

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

**なぜFFIが必要か**: `FormData` APIはブラウザDOM APIであり、フォーム要素からのデータ抽出にはJavaScriptが必要。Server Actionsへのデータ送信で使用。

> ✅ **D1アクセス最適化**: `mizchi/cloudflare`パッケージの`D1Database`/`D1PreparedStatement`型を使用し、SQL操作を型安全に実行

## 技術的知見

### MoonBit標準APIの活用

```moonbit
// JSオブジェクトのプロパティアクセス
let val = obj._get("field")

// null/undefinedチェック
if @core.is_nullish(val) { ... }

// JSオブジェクト生成
@core.from_entries([("key", @core.any(value))])

// JS例外のキャッチ
@core.try_sync(fn() { ... })
```

### Sol Framework APIの活用

```moonbit
// フォームボディの取得
let body = props.ctx.req.parseBody()

// HTTPリダイレクト
@core.any(props.ctx.redirect("/path"))
```

## 評価結果

### 正常に動作した機能

- ✅ Sol Frameworkのルーティング
- ✅ D1データベースCRUD操作
- ✅ Island Componentのハイドレーション
- ✅ リアルタイムマークダウンプレビュー（MoonBit `@markdown`使用）
- ✅ Basic認証（timingSafeEqual保護）
- ✅ Server Actions

### 制限事項

| 問題 | 状況 | 回避策 |
|------|------|--------|
| D1 SQL | MoonBitから直接呼び出せない | JS FFIでCloudflare D1 APIを呼び出し |
| DOM API | MoonBitから直接操作できない | `redirect_to`, `get_form_data_from_form`はFFI維持 |
| JS例外処理 | `@core.try_sync`の戻り値型制約 | 例外処理が必要な場合はFFI |

## デプロイ

```bash
# 本番デプロイ
wrangler deploy
```

## ライセンス

MIT
