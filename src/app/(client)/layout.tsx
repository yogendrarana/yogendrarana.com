import "@/styles/globals.css";
import { cn } from "@/util/cn";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import BackgroundProvider from "@/components/provider/background-provider";


export const metadata: Metadata = {
  title: "Yogendra Rana",
  description: "Portfolio website of Yogendra Rana",
};

const interVariable = localFont({
  variable: "--font-sans",
  src: "../../fonts/InterVariable.woff2",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const geistMonoVariable = localFont({
  variable: "--font-geist-mono",
  src: "../../fonts/GeistMonoVF.woff2",
  weight: "100 900",
  display: "swap",
  preload: true,
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="./smiley.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body
        className={cn(
          `font-sans ${interVariable.variable} ${geistMonoVariable.variable} antialiased`,
          "bg-white dark:bg-neutral-900",
          "selection:bg-neutral-200 dark:selection:bg-neutral-700",
        )}
      >
        <BackgroundProvider>
          {children}
        </BackgroundProvider>
      </body>
      <Analytics />
    </html>
  );
}
