# MoonBit + Luna UI 評価プロジェクト

MoonBitとLuna UI (Sol Framework) を使用したブログ管理ツールの実装評価。

## 技術スタック

- **言語**: MoonBit
- **UIフレームワーク**: Luna UI (Sol Framework)
- **ランタイム**: Cloudflare Workers
- **データベース**: D1 (SQLite)

## セットアップ

```bash
# 依存関係のインストール
pnpm install

# 環境変数の設定（.envファイルを作成）
cp .env.example .env
# .envを編集して認証情報を設定

# MoonBitビルド
just build

# 開発サーバー起動
just dev

# ブラウザでアクセス
open http://localhost:8787
```

## 認証設定

Basic認証の認証情報は`.env`ファイルで管理します：

```bash
# .env
BASIC_AUTH_USER=your_username
BASIC_AUTH_PASS=your_secure_password
```

**注意**: `.dev.vars`は`.env`へのシンボリックリンクです。Wranglerは`.dev.vars`を、Playwrightは`.env`を読み込むため、この構成で両方が同じ認証情報を使用します。

## E2Eテスト

```bash
# 全テスト実行
pnpm run test:e2e

# 認証テストのみ
pnpm run test:e2e -- auth.spec.ts
```

テストは`.env`から認証情報を読み込みます。

## 現在のMoonBit/Luna UIの問題点

### 1. loader.jsの依存（フレームワーク制約）

**状況**: Island Componentのハイドレーションには`loader.js`（JavaScript）が必須

**理由**:
- `loader.js`はLuna UIフレームワークが提供するブートストラップスクリプト
- ブラウザで`luna:url`属性を持つ要素をスキャン
- 対象モジュールを動的インポートし`hydrate`関数を呼び出す
- これはフレームワークの根幹部分であり、MoonBitで代替する性質のものではない

**影響**: なし（フレームワークの正常な動作）

**補足**: Island Component自体（`app/client/markdown_editor.mbt`）はMoonBitで実装済み

### 2. マークダウン変換のJS Fallback

**状況**: マークダウンからHTML変換にJavaScript fallbackを使用

**理由**:
- MoonBitの`@mizchi/markdown`パッケージはUTF-16サロゲートペア問題を抱えている
- 絵文字や特定の文字を含むテキストで`InvalidIndex`エラーが発生
- 例: 文字列スライス時にUTF-16コードユニットの境界を跨ぐとクラッシュ

**現在の回避策**:
```moonbit
// app/server/routes.mbt
extern "js" fn simple_markdown_to_html(content : String) -> String =
  #| (content) => {
  #|   return content
  #|     .replace(/^### (.*$)/gm, '<h3>$1</h3>')
  #|     // ... 正規表現でシンプルな変換
  #| }
```

**解決に必要な対応**:
- `@mizchi/markdown`パッケージのUTF-16対応修正
- または、MoonBitの文字列処理がUnicodeを正しく扱えるようになる

### 3. Sol FrameworkのApiHandlerリダイレクト問題

**状況**: `ApiHandler`からHTTP 302リダイレクトを返せない

**理由**:
- `ApiHandler`はレスポンスを自動的にJSONに変換する
- `ctx.redirect()` → 200 OK + Locationヘッダー（302ではない）
- `new Response(null, { status: 302 })` → 同様に200に変換される

**現在の回避策**:
```javascript
// クライアント側でLocationヘッダーを読み取りリダイレクト
const response = await fetch(form.action, { method: 'POST', ... });
const location = response.headers.get('Location');
window.location.href = location || '/admin';
```

**解決に必要な対応**:
- Sol Frameworkに`RawResponse`のような変換なしレスポンスハンドラの追加
- または、`PageHandler`でのPOST処理対応

### 4. Wrangler Assetsのパス問題

**状況**: `wrangler.json`の`assets.directory`で指定したディレクトリはルートパスで配信される

**例**:
- 設定: `"assets": { "directory": "./static" }`
- ファイル: `static/loader.js`
- 配信URL: `/loader.js`（`/static/loader.js`ではない）

**影響**: Island ComponentのURLや`<script>`タグのパスを正しく設定する必要がある

## ディレクトリ構成

```
app/
├── server/          # サーバーサイド（MoonBit）
│   ├── routes.mbt   # ルーティング・ページ・API
│   └── db.mbt       # D1データベースアクセス
├── client/          # クライアントサイド（MoonBit）
│   └── markdown_editor.mbt  # Island Component
└── __gen__/         # 自動生成ファイル
    └── types/       # Island Component型定義

static/              # 静的ファイル
├── loader.js        # Luna UIハイドレーションスクリプト
└── markdown_editor.js  # ビルド済みクライアントJS

.artifacts/          # 検証証跡
└── blog-admin/
    ├── REPORT.md    # 検証レポート
    ├── images/      # スクリーンショット
    └── videos/      # 動画
```

## 評価結果

### 正常に動作した機能

- ✅ Sol Frameworkのルーティング
- ✅ Basic認証ミドルウェア
- ✅ D1データベースCRUD操作
- ✅ Island Componentのハイドレーション
- ✅ リアルタイムマークダウンプレビュー
- ✅ フォーム送信とリダイレクト（クライアント側処理）

### 制限事項

- ⚠️ マークダウン変換はJS fallback使用
- ⚠️ APIからの直接HTTPリダイレクト不可
- ⚠️ UTF-16サロゲートペアを含む文字列処理に注意

## ライセンス

MIT
