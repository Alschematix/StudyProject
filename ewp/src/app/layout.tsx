"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Spacer from "@/components/Spacer";
import SignIn from "@/components/SignIn";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <NavBar onClick={onOpen} />
          <SignIn isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
          <Spacer />
          {children}
          <Spacer />
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
