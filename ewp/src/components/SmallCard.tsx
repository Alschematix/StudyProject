import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

interface Props {
    title: string;
    link?: string;
}

export const SmallCard = ({title,link} : Props) => {
  return (
    <>
      <Box
        as="a"
        href={link}
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
        {title}
      </Box>
    </>
  );
};
