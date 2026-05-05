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
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes moveBlue {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(30vw, 20vh) scale(1.2); }
            100% { transform: translate(-10vw, 40vh) scale(0.9); }
          }
          @keyframes moveViolet {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-30vw, -15vh) scale(1.1); }
            100% { transform: translate(15vw, -35vh) scale(1.3); }
          }
          @keyframes moveRed {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(20vw, -25vh) scale(0.8); }
            100% { transform: translate(-30vw, -10vh) scale(1.1); }
          }
          .light-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.85;
            will-change: transform;
          }
          .orb-blue {
            background-color: #1C69D4;
            width: 50vw; height: 50vh; top: -10%; left: -10%;
            animation: moveBlue 12s infinite ease-in-out alternate;
          }
          .orb-violet {
            background-color: #6E2585;
            width: 45vw; height: 45vh; top: 30%; right: -10%;
            animation: moveViolet 14s infinite ease-in-out alternate;
          }
          .orb-red {
            background-color: #E8003A;
            width: 60vw; height: 50vh; bottom: -20%; left: 10%;
            animation: moveRed 16s infinite ease-in-out alternate;
          }
        `}} />
      </head>
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
