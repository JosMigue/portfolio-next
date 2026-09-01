import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from '@/app/components/layout/Nav';
import Footer from "@/app/components/layout/Footer";
import Main from "@/app/components/layout/Main";
import { ViewTransition } from "react";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Jose Galvan",
  description: "Portfolio of Jose Galvan, a frontend developer passionate about creating beautiful and functional web applications. Explore my projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <header>
          <Nav />
        </header>
        <Main>
          <NextTopLoader  color="#9ae600" />
          <ViewTransition name='layout-transition'>
            {children}
          </ViewTransition>
        </Main>
      </body>
    </html>
  );
}
