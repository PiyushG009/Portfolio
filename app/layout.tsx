import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piyush Gupta — Full Stack & Product Developer",
  description:
    "Portfolio of Piyush Gupta — Full Stack Developer, Product Builder & Creative Frontend Engineer. Building polished, reliable web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

