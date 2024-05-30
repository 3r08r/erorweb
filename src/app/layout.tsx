import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabzact linktree",
  description: "Made By E_0r",
  icons: "https://cdn.discordapp.com/avatars/257177177378914304/02066510896c8a92c949ca5c20673b65?size=1024"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
      <link rel="icon" href="/favicon.ico" sizes="any"/>
    </Head>
    <body className={inter.className}>{children}</body>
    </html>
  );
}
