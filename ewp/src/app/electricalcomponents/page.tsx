"use client";

import {
  Heading,
  Avatar,
  Box,
  Flex,
  VStack,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { RiApps2Fill } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { BsPencilFill } from "react-icons/bs";
import { FaMap } from "react-icons/fa";

export default function ElectricalComponents() {
  return (
    <Flex justify={"center"} flexDir={"column"}>
      <Heading fontSize={"4xl"} textAlign={"center"} marginTop={10} marginBottom={10}>
        Electrical Components
      </Heading>
      <Flex py={6} wrap={"wrap"} justify={"center"}>
        <Flex py={6} wrap={"wrap"} justify={"center"} maxW={1200} marginTop={50} marginBottom={100}>
          <VStack>
              <Box
                as="a"
                href="electricalcomponentsexpand"
                display={"flex"}
                flexDirection={"column"}
                maxW={"350px"}
                minW={"350px"}
                height={50}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"lg"}
                p={6}
                textAlign={"center"}
                justifyContent={"center"}
                alignItems="center"
                // padding={20}
                gap={10}
              >
                Electrical Components Element 1
              </Box>
              <Box
                
                display={"flex"}
                flexDirection={"column"}
                maxW={"350px"}
                minW={"350px"}
                height={50}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"lg"}
                p={6}
                textAlign={"center"}
                justifyContent={"center"}
                alignItems="center"
                // padding={20}
                gap={10}
              >
                Electrical Components Element 2
              </Box>
              <Box
                
                display={"flex"}
                flexDirection={"column"}
                maxW={"350px"}
                minW={"350px"}
                height={50}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"lg"}
                p={6}
                textAlign={"center"}
                justifyContent={"center"}
                alignItems="center"
                // padding={20}
                gap={10}
              >
                Electrical Components Element 3
              </Box>
              <Box
                
                display={"flex"}
                flexDirection={"column"}
                maxW={"350px"}
                minW={"350px"}
                height={50}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"lg"}
                p={6}
                textAlign={"center"}
                justifyContent={"center"}
                alignItems="center"
                // padding={20}
                gap={10}
              >
                Electrical Components Element 4
              </Box>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}
