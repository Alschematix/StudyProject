import { Flex } from "@chakra-ui/react";
import { BigCard } from "./BigCard";

interface Props {
  name: string;
  date: string;
  content: string;
  title: string;
}

export const Contributor = ({ name, date, content, title }: Props) => {
  return (
    <>
      <Flex w="100%" flexDir={"column"}>
        <Flex w="100%" align={"self-start"}>
          Contributor: {name}
        </Flex>
        <Flex w="100%" align={"self-start"}>
          Date: {date}
        </Flex>
        <BigCard content={content} title={title}/>
      </Flex>
    </>
  );
};
