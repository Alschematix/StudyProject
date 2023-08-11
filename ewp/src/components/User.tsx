import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface Props {
    username: string;
    userType: string;
    followers: number;
    following: number;
}

const User = ({username, userType, followers, following}:Props) => {
  return (
    <div>
      {" "}
      <Flex
        flexDir={"column"}
        borderRadius={8}
        boxShadow={"xl"}
        minW="380px"
        w="380px"
        minH="600px"
        h="100%"
        bg={useColorModeValue("gray.300", "gray.700")}
        justifyContent={"space-around"}
        alignItems={"center"}
        p={8}
      >
        <Flex flexDir={"column"} align={"center"} gap={2}>
          <Image
            border={10}
            src="stockuser.jpg"
            boxSize={"150px"}
            objectFit={"cover"}
            borderRadius={"full"}
          ></Image>
          <Text as="b">{username}</Text>
          <Text>Account Type: {userType}</Text>
        </Flex>
        <Text>Followers: {followers}</Text>
        <Text>Following: {following}</Text>
      </Flex>
    </div>
  );
};

export default User;
