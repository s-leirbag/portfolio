import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
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
        url: "/logo-1-dot-fat-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-1-dot-fat-dark.png",
      },
    ],
    apple: [
      {
        url: "/logo-1-dot-fat-180-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-1-dot-fat-180-light.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-lg lg:text-xl font-[family-name:var(--font-geist-sans)] bg-[radial-gradient(#e5e5e5_3px,transparent_3px)] dark:bg-[radial-gradient(#262626_3px,transparent_3px)] [background-size:36px_36px] transition-all duration-200`}
      >
        <div className="absolute w-24 md:w-32 p-4 md:p-8">
          <div className="absolute inset-0 gradient-bg-thick blur-lg" />
          <Link href={"/"} className="relative">
            <Image
              src="/logo-1-dot-fat-dark.png"
              alt="logo"
              width={512}
              height={512}
              className="hidden dark:inline-block"
            />
            <Image
              src="/logo-1-dot-fat-light.png"
              alt="logo"
              width={512}
              height={512}
              className="dark:hidden"
            />
          </Link>
        </div>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
