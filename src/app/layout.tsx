import type { Metadata } from "next";
import { Alegreya_Sans, Lalezar } from "next/font/google";
import "./globals.css";
import AnalyticsInit from "@/components/AnalyticsInit";

const alegreyaSans = Alegreya_Sans({
  variable: "--font-alegreya-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const lalezar = Lalezar({
  variable: "--font-lalezar",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Advisely",
  description: "Advisely — Expert advice, clearly presented.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alegreyaSans.variable} ${lalezar.variable} antialiased`}>
        <AnalyticsInit />
        {children}
      </body>
    </html>
  );
}
