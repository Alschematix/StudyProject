import { useState } from "react";
import { VStack, Text, RadioGroup, Radio } from "@chakra-ui/react";

interface Content {
  question: string;
  answerKey: { Item: string; isAns: boolean }[];
}

interface Props {
  getValue: (v: any) => void;
  content: Content;
}

export default function MCSingleQuestion({ getValue, content }: Props) {
  const [value, setValue] = useState("");
  const events = (e: string) => {
    setValue(e);
    getValue(e);
  };
  return (
    <VStack align={"baseline"} pl={10}>
      <Text>{content.question}</Text>
      <RadioGroup onChange={events} value={value}>
        <VStack align={"baseline"} pl={5}>
          {content.answerKey.map((item, index) => (
            <Radio value={index.toString()} key={index}>
              {item.Item}
            </Radio>
          ))}
        </VStack>
      </RadioGroup>
    </VStack>
  );
}
