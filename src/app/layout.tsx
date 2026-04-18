import type { Metadata } from "next";
import "@/styles/main.css";
import { JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const jetbrains = JetBrains_Mono({});

export const metadata: Metadata = {
  title: {
    default: "Jose D. Rios",
    template: "%s | Jose D. Rios",
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicons/apple-touch-icon.png",
    shortcut: "/favicons/favicon.ico",
  },
  manifest: "/favicons/site.webmanifest",
  themeColor: "#191a1c",
  openGraph: {
    siteName: "Jose D. Rios",
    locale: "en_US",
    title: "Jose D. Rios",
    url: "https://josedrios.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jose D. Rios",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrains.className}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
