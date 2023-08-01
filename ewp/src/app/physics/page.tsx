"use client";

import {
  Heading,
  Avatar,
  Box,
  Flex,
  VStack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { RiApps2Fill } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5"
import { BsPencilFill } from "react-icons/bs"
import { FaMap } from "react-icons/fa"

export default function Physics() {
  return (
    <Flex justify={"center"} flexDir={"column"}>
      <Heading fontSize={"4xl"} textAlign={"center"} marginTop={10} marginBottom={10}>
        Physics
      </Heading>
      <Flex py={6} wrap={"wrap"} justify={"center"}>
        <Flex py={6} wrap={"wrap"} justify={"center"} maxW={1200} marginTop={50} marginBottom={100}>
          <VStack>
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
                Physics Element 1
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
                Physics Element 2
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
                Physics Element 3
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
                Physics Element 4
              </Box>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}
