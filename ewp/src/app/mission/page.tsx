"use client";

import Head from "next/head";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import Feature from "@/components/Feature";

export default function Mission() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Make Learning&nbsp;
            <Text as={"span"} color={"green.400"}>
              Easier
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit facere natus quidem nostrum libero harum voluptates
            labore non quisquam velit expedita numquam magnam, doloribus,
            facilis obcaecati ducimus. Consequatur, explicabo dolores?
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Get Started
            </Button>
            <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
      <Feature />
    </>
  );
}

