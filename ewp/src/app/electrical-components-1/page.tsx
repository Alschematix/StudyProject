"use client";

import { Contributor } from "@/components/Contributor";

import { Flex, VStack } from "@chakra-ui/react";

export default function ElectricalComponentsExpand() {
  const contributors: string[][] = [
    ["Rowdy Despot", "2023/07/21"],
    ["idkz", "2023/07/21"],
    ["Hells_Chan", "2023/07/21"],
    ["Capybaraa", "2023/07/21"],
    ["Villager", "2023/07/21"],
  ];

  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores unde quasi illum distinctio at, magnam est excepturi numquam quia. Sed molestiae accusantium aut animi maxime dolore excepturi, officia perspiciatis.";

  return (
    <Flex justify={"center"} flexDir={"column"} w="100%">
      <Flex py={6} wrap={"wrap"} justify={"center"} w="100%" gap={20}>
        <Flex
          py={6}
          wrap={"wrap"}
          justify={"center"}
          w="100%"
          marginTop={50}
          marginBottom={100}
        >
          <VStack w="80%" gap="30px">
            
              
                {contributors.map((contribute) => (
                  <Contributor
                    name={contribute[0]}
                    date={contribute[1]}
                    content={content}
                  />
                ))}
              
            
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}
