import { Box, Checkbox, Collapse, Heading, Icon } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { BsBookmark } from "react-icons/bs";
import  CollapseEx from "./CollapseEx"
import ContentComponent from './Content';
import HTMLInjector from "./HTMLInjector";


interface Props {
  title: string;
  content: string;
}

export const BigCard = ({ content, title }: Props) => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        w="100%"
        minH={400}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        gap={5}
        padding={8}
      >
        <Box
          w="100%"
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box w="30%" >
            <Heading size="lg" as="h4">
              Definition of Term
            </Heading>
          </Box>
          <Box alignItems="center" display={"flex"} gap="30px" w="30%" justifyContent={"center"}>
            <Heading>{title}</Heading>
            <Icon boxSize={7} as={BsBookmark}></Icon>
          </Box>
          <Box display="flex" w="30%"  justifyContent={"center"} gap={"10px"}>
            <Heading size="md">Completed</Heading>
            <Checkbox size="lg"/>
            
          </Box>

        </Box>
        <CollapseEx />
        <HTMLInjector html={content} />
      </Box>
    </>
  );
};
