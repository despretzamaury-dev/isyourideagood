import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Idea Analyzer - Brutally Honest Feedback",
  description: "Get an objective, brutally honest evaluation of your startup idea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen relative text-white">
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, overflow: "hidden", backgroundColor: "var(--color-carbon)" }}>
          <div className="ambient-light ambient-blue"></div>
          <div className="ambient-light ambient-violet"></div>
          <div className="ambient-light ambient-red"></div>
        </div>
        <main style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", flex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
