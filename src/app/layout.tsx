import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Data Science Portfolio",
  description: "Portfolio showcasing Data Science, Machine Learning, and Web Development skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <nav className="navbar">
          <div className="container nav-content">
            <Link href="/" className="logo text-gradient" style={{ textDecoration: 'none' }}>Portfolio.</Link>
            <div className="nav-links">
              <Link href="/#about">About Me</Link>
              <Link href="/#projects">Projects</Link>
              <Link href="/#contact">Contact Me</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
