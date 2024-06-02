import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "./NavBar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const dynamic = "force-static";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex max-w-3xl mx-auto gap-4 text-3xl dark`}
      >
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  );
}