// アプリ全体の共通レイアウト（App Routerでは必須）
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // HTML構造のルート（<html> は必ず必要）
    <html>
      <header style={{ background: '#eee', padding: '1rem' }}>
        <h1>My Next.js App</h1>
      </header>
      {/* ページの本体。ここに各ページ（page.tsx）が入る */}
      <body>{children}</body>
    </html>
  );
}
