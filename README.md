## プロジェクト概要

Next.js (App Router) をベースにした最小構成のフロントエンドプロジェクトです。  
React 19 + TypeScript に Tailwind CSS と ESLint を組み合わせています。

---

### 📂 ディレクトリ構成

├─ app/ # ルートレイアウト & 各ページ (App Router)
├─ public/ # 静的アセット（画像・favicon 等）
├─ .next/ # ビルド成果物（git ignore 済み）
├─ node_modules/ # 依存パッケージ
├─ next.config.ts # Next.js 設定
├─ tsconfig.json # TypeScript 設定
├─ package.json # スクリプト & 依存一覧
└─ README.md # (このファイル)


---

## 📦 主要依存

| 種別 | パッケージ | 役割 |
|------|-----------|------|
| Runtime | `next@15.4.2`・`react@19.1.0`・`react-dom@19.1.0` | 本体 |
| TypeScript | `typescript^5` | TS コンパイラ |
| 型定義 | `@types/react`・`@types/react-dom`・`@types/node` | 型補完 |
| Styling | `tailwindcss^4`・`@tailwindcss/postcss` | ユーティリティ CSS |
| Lint | `eslint^9`・`eslint-config-next` | コード静的解析 |

---

## 🚀 npm スクリプト

| コマンド | 説明 |
|----------|------|
| `npm run dev`   | 開発サーバー (Turbopack / HMR) |
| `npm run build` | 本番ビルド (`.next/` 生成) |
| `npm run start` | 本番サーバー起動 |
| `npm run lint`  | ESLint 実行 |

---

## 🏁 クイックスタート

```bash
# 依存インストール
npm install

# 開発サーバー起動
npm run dev
# → http://localhost:3000
