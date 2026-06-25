import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Allure Youth Guide | Empowering Young Ghanaians",
  description: "A non-profit revolutionizing lives to unlock potential, foster sustainable development, and create a brighter future for all.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}