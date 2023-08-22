import { useState } from "react";
import {
  VStack,
  Text,
  Checkbox,
  CheckboxGroup,
  useCheckboxGroup,
} from "@chakra-ui/react";

interface Props {
  question: string;
  answerKey: { item: string; isAns: boolean }[];
}

export default function MCMultiQuestion({ question, answerKey }: Props) {
  let val: string[] = [];
  const onChange = (value: string[]) => {
    val = value;
    console.log(val);
  };
  return (
    <VStack align={"baseline"} pl={10}>
      <Text>{question}</Text>
      <CheckboxGroup onChange={onChange}>
        <VStack align={"baseline"} pl={5}>
          {answerKey.map((item, index) => (
            <Checkbox value={index.toString()} key={index}>
              {item.item}
            </Checkbox>
          ))}
        </VStack>
      </CheckboxGroup>
    </VStack>
  );
}
