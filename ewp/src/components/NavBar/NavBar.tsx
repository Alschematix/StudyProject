"use client";

import { SearchBar } from "../SearchBar";
import { ToggleLight } from "../ColorMode";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import DesktopNav from "./DesktopNav";

//Added Props to pass an onclick function
interface Props {
  onClick: () => void;
}

export default function NavBar({ onClick }: Props) {
  const { isOpen, onToggle } = useDisclosure();
  const NAV_ITEM: Array<NavItem> = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      children: [
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
      children: [
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
    <Box>
      <Flex
        position={"fixed"}
        zIndex={9000}
        width={"100%"}
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          align="center"
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Button as={"a"} href="/" variant={"link"}>
              Logo
            </Button>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav navItems={NAV_ITEM} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Flex align="center" justifyContent={"flex-start"}>
            <ToggleLight />
          </Flex>
          {/*Change href in the button to onClick*/}
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            onClick={onClick}
          >
            Sign In
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"green.400"}
            href="signup"
            _hover={{
              bg: "green.300",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const MobileNav = () => {
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
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle} zIndex={9000}>
      <Box
        // pos='fixed'

        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all 0s"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    children: [
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
    children: [
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
