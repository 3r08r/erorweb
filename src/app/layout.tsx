import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erors Linktree",
  description: "Made By E_0r",
  icons: [{ rel: "icon", url: "https://cdn.discordapp.com/avatars/962060530506399784/8af2561dc3920eb3ecc72c194d905584?size=1024&.jpg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
    </html>
  );
}
