import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/components/UserProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Secure Ingress Home",
  description: "Secure Ingress Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <Header />
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}