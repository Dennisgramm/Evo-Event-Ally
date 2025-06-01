import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable: '--font-Poppins',


});


export const metadata: Metadata = {
  title: "Evo Ally",
  description: "Evo Ally is an App for Event Management",
  icons: {
    icon:'/assets/images/logo.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className= {poppins.variable}>{children}
        </body>
      </html>
    </ClerkProvider>
  );
}
