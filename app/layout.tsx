import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Pay&Play",
  description: "Obtén tu smartphone pagando cuotas semanales sin tarjeta de crédito.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
