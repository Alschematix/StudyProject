import { Stack, useColorModeValue } from "@chakra-ui/react";
import MobileNavItem from "./MobileNavItem";

interface NavItem {
  label: string;
  subLabel?: string;
  subNav?: NavItem[];
  href?: string;
}

interface Props {
  navItems: NavItem[];
}

export default function MobileNav({ navItems }: Props) {
  return (
    <Stack
      pos={"fixed"}
      top="55"
      w="100%"
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
      zIndex={9000}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}
