# MoonBit + Luna UI 評価リポジトリ

## ⚠️ 絶対禁止事項

**moonbitおよびluna uiでできることをjs/tsで書いている限りそれは成果じゃなくてゴミ。**

### 具体的な禁止事項

- ❌ TypeScriptでMarkdown変換関数を書く → MoonBitの `@markdown` を使え
- ❌ JavaScriptでプレビュー処理を書く → Luna UIのIsland Componentを使え
- ❌ Honoのミドルウェアで認証を書く → Sol Frameworkの `@mw` を使え
- ❌ `src/worker.ts` を肥大化させる → `app/server/routes.mbt` で実装しろ

### このリポジトリの目的

**MoonBitとLuna UI (Sol Framework) の実用性を評価すること**

JS/TSで回避策を書いた時点で評価になっていない。
Cloudflare Workersの制限があっても、それを乗り越える方法を探すか、制限として正直に報告しろ。

### 現状の問題点

1. `src/worker.ts` の `markdownToHtml` 関数 - MoonBitで書け
2. `public/preview.js` - Luna UI Island Componentで書け
3. 認証処理 - Sol Framework middlewareで書け

### 正しいアプローチ

```
wrangler.json の main → Sol Framework Worker に変更
app/server/routes.mbt → 全ルーティング・ロジック
app/client/*.mbt → Island Components
```

## 技術スタック

- **言語**: MoonBit
- **UIフレームワーク**: Luna UI (Sol Framework)
- **ランタイム**: Cloudflare Workers
- **データベース**: D1 (SQLite)

## 既知の制限

- `@mizchi/markdown` NPMパッケージはCloudflare Workersのグローバルスコープ制限に引っかかる
  - 対策: lazy-init化をmizchiに依頼するか、ハンドラ内での動的インポートを検討
