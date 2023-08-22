import { Text, Input, Box } from "@chakra-ui/react";

interface Props {
  question: string;
  answerKey: { item: string; isAns: boolean }[];
}

export default function FillQUestion({ question, answerKey }: Props) {
  return (
    <Box pl={10}>
      {question}
      <Text>
        <strong>Answer:</strong> <Input />
      </Text>
    </Box>
  );
}
