"use client";

import { Contributor } from "@/components/Contributor";

import { Flex, VStack } from "@chakra-ui/react";
import "./image.css";
import { Comment } from "@/components/Comment";


export default function MathElement1() {
  const contributors: string[][] = [
    [
      "Rowdy Despot",
      "2023/07/21",
      "Mathematics",
      "<div class='img'><img src='../Math1.jpeg'></div>" +
        "<br>" +
        "<span><strong>Mathematics</strong> is a <strong>scientific discipline</strong> that produces <strong>novel findings</strong>. </span>" +
        "<br>" +
        "<br>" +
        "<p>It involves creating and applying <strong>abstract concepts, symbols</strong> and <strong>rules</strong> to explore various <strong>phenomena</strong> and <strong>patterns</strong>.</p>" +
        "<br>" +
        "<p>Mathematics is an effective instrument that enables us to <strong>anticipate outcomes</strong> and <strong>make predictions</strong>. It helps us to <strong>test hypotheses, verify facts</strong> and <strong>solve problems</strong> in various domains of knowledge. This tool also reveals <strong>hidden connections</strong> and <strong>insights</strong> that can inspire <strong>new questions and discoveries</strong>.</p>" +
        "<br>" +
        "<p>It is also a way of <strong>communicating</strong> a <strong>problem</strong> in a <strong>precise and logical manner</strong>, using a <strong>common language</strong> that can be understood by anyone who knows the rules.</p>" +
        "<br>" +
        "<p>Mathematics is used in <strong>game development</strong> to calculate physics, stats, the economy, levels and more;</p>" +
        "<br>" +
        "<div class='img'><img class='math2' src='../Math2.jpeg'></div>",
    ],
    ["idkz", "2023/07/21", "Vectors"],
    ["Hells_Chan", "2023/07/21", "Lists"],
    ["Capybaraa", "2023/07/21", "Ordered Lists"],
    ["Villager", "2023/07/21", "Tuples"],
  ];

  

  return (
    <Flex justify={"center"} flexDir={"column"} w="100%">
      <Flex py={6} wrap={"wrap"} justify={"center"} w="100%" gap={20}>
        <Flex
          py={6}
          wrap={"wrap"}
          justify={"center"}
          w="100%"
          minW={'450px'}
          marginTop={50}
          marginBottom={100}
        >
          <VStack w="80%" gap="30px">
            {contributors.map((contribute) => (
              <Contributor
                name={contribute[0]}
                date={contribute[1]}
                content={contribute[3]}
                title={contribute[2]}
              />
            ))}
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}
