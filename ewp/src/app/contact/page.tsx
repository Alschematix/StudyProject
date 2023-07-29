"use client";

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export default function Contact() {
  return (
    <Container
      bg="white"
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
      minW={"320px"}
    >
      <Flex marginTop={100} marginBottom={100}>
        <Box
          boxShadow="2xl"
          bg="#f0f0f0"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box display={"flex"} justifyContent={"center"} alignItems={"Center"}>
            <Wrap justify={"center"}
            paddingTop={10}
            paddingBottom={10}>
              <WrapItem>
                <Box>
                  <Flex
                    justifyContent="center"
                    flexDir={"column"}
                    textAlign={"center"}
                    width={"100%"}
                  >
                    <Heading color={"black"}>Contact</Heading>
                    <Text color="gray.500">Fill out the form to contact</Text>
                    <Box>
                      <VStack pl={0} spacing={3} alignItems="center">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="black"
                          _hover={{ border: "2px solid #66BB6A" }}
                          leftIcon={<MdPhone color="#66BB6A" size="20px" />}
                        >
                          +91-988888888
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="black"
                          _hover={{ border: "2px solid #66BB6A" }}
                          leftIcon={<MdEmail color="#66BB6A" size="20px" />}
                        >
                          hello@abc.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="black"
                          _hover={{ border: "2px solid #66BB6A" }}
                          leftIcon={
                            <MdLocationOn color="#66BB6A" size="20px" />
                          }
                        >
                          Karnavati, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        color={"black"}
                        _hover={{ bg: "#66BB6A" }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        color={"black"}
                        _hover={{ bg: "#66BB6A" }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        color={"black"}
                        _hover={{ bg: "#66BB6A" }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack>
                  </Flex>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#66BB6A"
                          color="white"
                          _hover={{}}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
