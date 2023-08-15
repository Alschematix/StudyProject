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

  const NAV_ITEMS = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      subNav: [
        {
          label: "The mission",
          subLabel: "What we're here to do",
          href: "mission",
        },
        {
          label: "The team",
          subLabel: "Learn about the creators",
          href: "team",
        },
      ],
    },
    {
      label: "Learn",
      href: "learn",
      subNav: [
        {
          label: "Fields",
          href: "fields",
        },
        {
          label: "Applications",
          href: "applications",
        },
        {
          label: "Map",
          href: "map",
        },
        {
          label: "Dictionary",
          href: "dictionary",
        },
      ],
    },
    {
      label: "Forum",
      href: "forum",
    },
  ];

  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <NavBar onClick={onOpen} navItems={NAV_ITEMS} />
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
