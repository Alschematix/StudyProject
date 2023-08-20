import { useState } from "react";
import { VStack, Text, RadioGroup, Radio } from "@chakra-ui/react";

interface Props {
  getValue: (v: any) => void;
}

export default function MCSingleQuestion({ getValue }: Props) {
  const [value, setValue] = useState("");
  const events = (e: string) => {
    setValue(e);
    getValue(e);
  };
  return (
    <VStack align={"baseline"} pl={10}>
      <Text>Who is the product Owner? </Text>
      <RadioGroup onChange={events} value={value}>
        <VStack align={"baseline"} pl={5}>
          <Radio value="1">Paul</Radio>
          <Radio value="2">Alex</Radio>
          <Radio value="3">Zach</Radio>
          <Radio value="4">Jonathan</Radio>
          <Radio value="5">Ty</Radio>
        </VStack>
      </RadioGroup>
    </VStack>
  );
}
