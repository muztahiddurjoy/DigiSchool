import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  weight:["100","200","300","400","500","600","700","800","900"]
})

export const metadata: Metadata = {
  title: "DigiSchool",
  description: "A School for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
