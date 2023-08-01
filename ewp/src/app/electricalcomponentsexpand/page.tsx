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

export default function ElectricalComponentsExpand() {
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
          <VStack w="80%" gap={20}>
            <Flex w='100%' flexDir={"column"}>
              <Flex w="100%" align={"self-start"}>
                Contributor: Rowdy Despot
              </Flex>
              <Flex w="100%" align={"self-start"}>
                Date: 2023/07/31
              </Flex>
              <Flex w="100%" align={"self-start"}>
                Content:
              </Flex>
              <Box
                display={"flex"}
                flexDirection={"column"}
                w="100%"
                height={400}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"lg"}
                textAlign={"center"}
                justifyContent={"center"}
                alignItems="center"
                gap={10}
              >
                Electrical Components Element 1
              </Box>
            </Flex>
            <Flex w='100%' flexDir={"column"}>
              <Flex w="100%" align={"self-start"}>
                Contributor: Rowdy Despot
              </Flex>
              <Flex w="100%" align={"self-start"}>
                Date: 2023/07/31
              </Flex>
              <Flex w="100%" align={"self-start"}>
                Content:
              </Flex>
              <Box
                display={"flex"}
                flexDirection={"column"}
                w="100%"
                height={400}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"lg"}
                textAlign={"center"}
                justifyContent={"center"}
                alignItems="center"
                gap={10}
              >
                Electrical Components Element 1
              </Box>
            </Flex>
            <Flex w='100%' flexDir={"column"}>
              <Flex w="100%" align={"self-start"}>
                Contributor: Rowdy Despot
              </Flex>
              <Flex w="100%" align={"self-start"}>
                Date: 2023/07/31
              </Flex>
              <Flex w="100%" align={"self-start"}>
                Content:
              </Flex>
              <Box
                display={"flex"}
                flexDirection={"column"}
                w="100%"
                height={400}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"lg"}
                textAlign={"center"}
                justifyContent={"center"}
                alignItems="center"
                gap={10}
              >
                Electrical Components Element 1
              </Box>
            </Flex>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}
