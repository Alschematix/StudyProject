"use client"
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <NavBar />
          <HeroSection />
          <Feature />
          {children}
          <Footer />
        </ChakraProvider>
        </body>
    </html>
  )
}
