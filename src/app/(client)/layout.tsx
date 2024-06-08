import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Yogendra Rana",
  description: "Portfolio website of Yogendra Rana",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="./smiley.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
      <Analytics />
    </html>
  );
}
