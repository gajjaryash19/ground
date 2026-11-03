import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/common/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Ground",
  description:
    "Timeless footwear designed for everyday movement, crafted with premium materials and lasting comfort.",
  icons: {
    icon: [
      {
        url: "/assets/images/logo/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/images/logo/logo.png",
        media: "(prefers-color-scheme: dark)",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp"
        />
      </head>
      <body suppressHydrationWarning>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
