import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { Header } from "@/app/Components/Header";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <Header/>
        <body className={inter.className}>{children}</body>
      </>
  );
}