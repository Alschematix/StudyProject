import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Stack,
  useColorModeValue,
  Icon,
  Collapse,
  Text,
  Box,
} from "@chakra-ui/react";

interface Props {
  label: string;
  subLabel?: string;
  subNav?: Props[];
  href?: string;
}

export default function MobileNavItem({ label, subNav, href }: Props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={subNav && onToggle} zIndex={9000}>
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
        {subNav && (
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
          {subNav &&
            subNav.map((nav) => (
              <Box as="a" key={nav.label} py={2} href={nav.href}>
                {nav.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}
