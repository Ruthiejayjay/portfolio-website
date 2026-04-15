import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruth James - Full Stack Developer",
  description:
    "I craft digital experiences with modern technologies, building scalable web applications from concept to deployment",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-[#f0f0f0] antialiased">
        {children}
      </body>
    </html>
  );
}
