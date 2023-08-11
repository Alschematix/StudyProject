import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Text,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function SignInV2({ isOpen, onOpen, onClose }: Props) {
  const initialRef = useRef(null);
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />

        <ModalContent height={"xl"}>
          <ModalCloseButton />
          <ModalHeader textAlign={"center"} pt={10}>
            Sign in to your account
          </ModalHeader>
          <Text textAlign={"center"} fontSize={"lg"} color={"gray.600"} py={2}>
            to enjoy all of our cool features ✌️
          </Text>

          <ModalBody pb={6} pt={6}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  ref={initialRef}
                  type="email"
                  placeholder="email@add.com"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Password" />
              </FormControl>
              <Stack
                direction={["column", "row"]}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"green.400"}>Forgot password?</Text>
              </Stack>
            </Stack>
          </ModalBody>

          <ModalFooter pb={30}>
            <VStack width={"100%"}>
              <Button
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
                width={"100%"}
              >
                Sign in
              </Button>
              <Text align={"center"}>
                Don't have an account?{" "}
                <Link color={"green.400"} href="signup">
                  Register
                </Link>
              </Text>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
