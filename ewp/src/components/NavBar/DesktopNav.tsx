import {
  useColorModeValue,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Flex,
  Box,
} from "@chakra-ui/react";
import { SearchBar } from "../SearchBar";
import DesktopSubNav from "./DesktopSubNav";

interface NavItem {
  label: string;
  subLabel?: string;
  subNav?: NavItem[];
  href?: string;
}

interface Props {
  navItems: NavItem[];
}

export default function DesktopNav({ navItems }: Props) {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} alignItems={"center"}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.subNav && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.subNav.map((subNavItem) => (
                    <DesktopSubNav
                      key={subNavItem.label}
                      label={subNavItem.label}
                      href={subNavItem.href}
                      subLabel={subNavItem.subLabel}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Flex align="flex-start">
        <SearchBar />
      </Flex>
    </Stack>
  );
}
