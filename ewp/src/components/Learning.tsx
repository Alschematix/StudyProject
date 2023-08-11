import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Learning = () => {
  return (
    <>
      <Flex
        bg={useColorModeValue("gray.300", "gray.700")}
        borderRadius={8}
        boxShadow={"xl"}
        w="100%"
        h="300px"
        // justifyContent={"Space-Around"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Heading w="100%" p={8}>
          My Learning
        </Heading>
      </Flex>
    </>
  );
};

export default Learning;
