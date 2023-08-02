import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

interface Props {
  content: string;
}

export const BigCard = ({ content }: Props) => {
  return (
    <>
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
        {content}
      </Box>
    </>
  );
};
