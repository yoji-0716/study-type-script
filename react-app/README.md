my-next-app/
├── app/
│   ├── layout.tsx       ← 必須: 全体のHTML構造を定義(親)
│   └── page.tsx         ← 必須: トップページの表示(子)
├── public/              ← 任意: 画像や静的ファイル
├── next.config.js       ← 自動生成される設定ファイル（最小限でもOK）
├── tsconfig.json        ← TypeScript設定（自動生成される）
├── package.json         ← 依存パッケージとスクリプト

npm run dev