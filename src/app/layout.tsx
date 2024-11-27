import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalCounter from "./components/GlobalCounter";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prizo App",
  description: "Prize contests app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalCounter />
        {children}
      </body>
    </html>
  );
}
