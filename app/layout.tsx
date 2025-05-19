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
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-lg lg:text-xl font-[family-name:var(--font-geist-sans)] transition-all duration-200`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
        <div className="absolute top-0 left-0 w-24 md:w-32 p-4 md:p-8">
          <Link href={"/"} className="relative">
            <Image
              src="/logo-1-dot-fat-dark.png"
              alt="Home"
              width={512}
              height={512}
              className="hidden dark:inline-block"
            />
            <Image
              src="/logo-1-dot-fat-light.png"
              alt="Home"
              width={512}
              height={512}
              className="dark:hidden"
            />
          </Link>
        </div>
      </body>
    </html>
  );
}
