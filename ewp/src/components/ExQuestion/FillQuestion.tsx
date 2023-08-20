import { Text, Input, Box } from "@chakra-ui/react";
export default function FillQUestion() {
  return (
    <Box pl={10}>
      <Text>
        Paul's favorite animal is a <Input placeholder="Answer" />, which is
        also his Discord Profile Picture.
      </Text>
    </Box>
  );
}
