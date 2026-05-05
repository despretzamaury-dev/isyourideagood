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
      <body className="flex flex-col min-h-screen relative text-white">
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, overflow: "hidden", backgroundColor: "#0D0D0D" }}>
          <div className="light-orb orb-blue"></div>
          <div className="light-orb orb-violet"></div>
          <div className="light-orb orb-red"></div>
        </div>
        <main style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", flex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
