"use client"
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Spacer from "@/components/Spacer";
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
          <Spacer />
          {children}
          <Spacer />
          <Footer />
        </ChakraProvider>
        </body>
    </html>
  )
}
