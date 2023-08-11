import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Collapse, Flex, Icon, useDisclosure, Text, Input } from "@chakra-ui/react";
import CollapseEx from "./CollapseEx";
import HTMLInjector from "./HTMLInjector";
import { Comment } from "./Comment";

interface Props {
  content: string;
}

const CardCollapse = ({ content }: Props) => {
  const comments = [
    {
      user: "dingus101",
      datetime: "12/09/23 12:27 PM",
      comment: "i LOVE this",
    },
    {
      user: "chungus808",
      datetime: "12/09/23 12:45 PM",
      comment: "I don't know what I'm doing!!!!!",
    },
  ];

  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex flexDir={"column"} alignItems={"center"} w="100%">
        <Icon
          as={isOpen ? ChevronUpIcon : ChevronDownIcon}
          onClick={onToggle}
          boxSize={8}
          cursor={"pointer"}
        />

        <Collapse in={isOpen} animateOpacity>
          <Box w="100%" p={4} rounded="md" shadow="md">
            <CollapseEx />
            <HTMLInjector html={content} />
          </Box>
          {comments.map((comment, index) => (
            <Comment user={comment.user} datetime={comment.datetime} comment={comment.comment}/>
          ))}
          <Input variant='outline' placeholder='Add a comment' mt={5}/>
        </Collapse>
        
      </Flex>
      
    </>
  );
};

export default CardCollapse;
