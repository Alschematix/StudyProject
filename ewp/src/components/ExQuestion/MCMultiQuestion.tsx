import { useState } from "react";
import {
  VStack,
  Text,
  Checkbox,
  CheckboxGroup,
  useCheckboxGroup,
} from "@chakra-ui/react";

export default function MCMultiQuestion() {
  let val: string[] = [];
  const onChange = (value: string[]) => {
    val = value;
    console.log(val);
  };
  return (
    <VStack align={"baseline"} pl={10}>
      <Text>Who is the product Owner? </Text>
      <CheckboxGroup onChange={onChange}>
        <VStack align={"baseline"} pl={5}>
          <Checkbox value="1">Paul</Checkbox>
          <Checkbox value="2">Alex</Checkbox>
          <Checkbox value="3">Zach</Checkbox>
          <Checkbox value="4">Jonathan</Checkbox>
          <Checkbox value="5">Ty</Checkbox>
        </VStack>
      </CheckboxGroup>
    </VStack>
  );
}
