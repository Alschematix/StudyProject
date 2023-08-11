import {
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  useColorModeValue,
  Text
} from "@chakra-ui/react";
import React from "react";

interface Props {
  contributions: number;
  learning: number;
  development: number;
}

const Progress = ({ contributions, learning, development }: Props) => {
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
          My Progress
        </Heading>
        <Flex w="100%" h="100px" justifyContent={'space-evenly'}>
          <Flex w="30%" justify={'center'}>
              <CircularProgress value={contributions} color="green.400" size="100px">
                <CircularProgressLabel>{contributions}%</CircularProgressLabel>
              </CircularProgress>
          </Flex>
          <Flex w="30%" justify={'center'}>
              <CircularProgress value={learning} color="green.400" size="100px">
                <CircularProgressLabel>{learning}%</CircularProgressLabel>
              </CircularProgress>
          </Flex>
          <Flex w="30%" justify={'center'}>
          <CircularProgress value={development} color="green.400" size="100px">
            <CircularProgressLabel>{development}%</CircularProgressLabel>
          </CircularProgress>
          </Flex>
        </Flex>
        <Flex w="100%" h="100px" justifyContent={'space-evenly'}>
            <Text w='30%' align={'center'}>Contributions</Text>
            <Text w="30%" align={'center'}>Learning</Text>
            <Text w='30%' align={'center'}>Development</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Progress;
