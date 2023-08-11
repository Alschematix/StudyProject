"use client";

import Learning from "@/components/Learning";
import Progress from "@/components/Progress";
import User from "@/components/User";
import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";

const Dashboard = () => {
  const users = {
    username: "bigdingus99",
    userType: "Regular",
    following: 69,
    followers: 420,
  };

  const progress = {contributions: 45,
  learning: 69,
  development: 37}

  return (
    <>
      <Flex mb="5px" w="100%" justifyContent={"center"}>
        <Heading w="81%">My Dashboard</Heading>
      </Flex>
      <Flex
        justifyContent={"center"}
        flexWrap={"wrap"}
        w="100%"
        minH="50vh"
        gap={5}
      >
        <User
          username={users.username}
          userType={users.userType}
          followers={users.followers}
          following={users.following}
        />
        <Flex minW="380px" w="60%" flexDir={"column"} gap={5}>
        <Progress contributions={progress.contributions} learning={progress.learning} development={progress.development}/>
        <Learning />
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
