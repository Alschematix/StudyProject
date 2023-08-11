"use client";

import { Heading, Flex, VStack } from "@chakra-ui/react";

import { SmallCard } from "@/components/SmallCard";

export default function Fields() {
  const items: string[][] = [
    ["Electrical Components Element 1", "electrical-components-1"],
    ["Electrical Components Element 2"],
    ["Electrical Components Element 3"],
    ["Electrical Components Element 4"],
  ];

  const heading = "Electrical Components"

  return (
    <Flex justify={"center"} flexDir={"column"}>
      <Heading
        fontSize={"4xl"}
        textAlign={"center"}
        marginTop={10}
        marginBottom={10}
      >
        {heading}
      </Heading>
      <Flex
        py={6}
        wrap={"wrap"}
        justify={"center"}
        marginTop={50}
        marginBottom={100}
      >
        <Flex py={6} wrap={"wrap"} justify={"center"} maxW={1200}>
          <VStack>
            {items.map((title) => (
              <SmallCard title={title[0]} link={title[1]} />
            ))}
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}
