import type { Metadata } from "next";
import "@/styles/main.css";
import { JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const jetbrains = JetBrains_Mono({});

export const metadata: Metadata = {
  title: "Jose D. Rios",
  description: "My Internet Home",
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
