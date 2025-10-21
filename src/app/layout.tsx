import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { graphikLcg } from "@/utils/fonts.utils";

export const metadata: Metadata = {
  title: "Kutambula Marketplace",
  description: "Marketplace para compra e venda de produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${graphikLcg.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
