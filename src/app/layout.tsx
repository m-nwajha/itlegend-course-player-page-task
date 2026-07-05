import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "ITLegend course player page task",
  description: "course player page task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}
