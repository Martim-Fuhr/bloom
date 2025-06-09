import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { SearchProvider } from "@/context/SearchContext";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bloom Store",
  description: "Your Favorite Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={openSans.className}>
        <SearchProvider>
           <CartProvider>
              {children}
          </CartProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
