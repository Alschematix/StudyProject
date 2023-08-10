import { Box, Checkbox, Collapse, Editable, EditableInput, EditablePreview, Heading, Icon } from "@chakra-ui/react";
import { useColorModeValue, Flex, Image, Text } from "@chakra-ui/react";
import "./component.css";

interface Props {
  user: string;
  datetime: string;
  comment: string;
}

export const Comment = ({ user, datetime, comment }: Props) => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        w="100%"
        minH={100}
        bg={useColorModeValue("gray.100", "gray.900")}
        borderRadius={"10px"}
        gap={5}
        padding={8}
        mt={4}
      >
        <Flex gap={5} alignItems={"center"}>
          <Image
            h={"50px"}
            w={"10px"}
            minW={"50px"}
            src={"./stockuser.png"}
            objectFit="cover"
            borderRadius={"full"}
            alt="#"
          />

          <div>
            <Text as="b">{user}</Text>
            <p>{datetime}</p>
            <p>{comment}</p>
          </div>
        </Flex>

      </Box>

    </>
  );
};
