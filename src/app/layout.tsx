import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrialModeProvider } from "@/lib/trial-mode-provider";
import TrialBanner from "@/components/TrialBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lendzi Real Estate — Fast, Transparent Lending",
  description: "Real estate purchase financing — fast, flexible, and built for investors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TrialModeProvider>
          <TrialBanner />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </TrialModeProvider>
      </body>
    </html>
  );
}
