import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google';
import './globals.css';
//import { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: 'Codonvert | mRNA to Amino Acid Converter',
  description: 'Convert any mRNA sequence to Amino Acids',
}

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--display-font",
});

const montserrat2 = Montserrat({
  subsets: ['latin'],
  variable: "--body-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${montserrat2.variable}`}>
      <body>{children}</body>
    </html>
  )
}
