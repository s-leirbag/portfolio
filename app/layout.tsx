import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Shiu",
  description: "Personal portfolio",
  icons: {
    icon: [
      {
        url: '/logo-1-dot-fat-light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo-1-dot-fat-dark.png',
      },
    ],
    apple: [
      {
        url: '/logo-1-dot-fat-180-light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo-1-dot-fat-180-light.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-neutral-50`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
