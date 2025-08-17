import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Pocket Crypto",
  description: "Simple Pocket Crypto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="contentwrap w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
