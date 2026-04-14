import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruth James - Full Stack Developer",
  description:
    "I craft digital experiences with modern technologies, building scalable web applications from concept to deployment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
