import type { Metadata } from "next";

// import css
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Yogendra Rana",
  description: "Portfolio website of Yogendra Rana",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}