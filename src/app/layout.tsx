import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";



const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: '--font-archivo'
})

export const metadata: Metadata = {
  title: "Amanze Jnr. Portfolio",
  description: "Amanze Bruno's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${archivo.variable} font-sans bg-[#0e1016] text-stone-200`}
      >
        
        
        {children}
  
      </body>
    </html>
  );
}
