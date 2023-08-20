import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Text,
} from "@chakra-ui/react";
import MCSingleQuestion from "./MCSingleQuestion";
import MCMultiQuestion from "./MCMultiQuestion";
import FillQUestion from "./FillQuestion";
import { useState } from "react";

const ITEMS_TRIAL = [
  { Label: "Acc 1", Content: "Acc 1 Questions" },
  { Label: "Acc 2", Content: "Acc 2 Questions" },
  { Label: "Acc 3", Content: "Acc 3 Questions" },
];

export default function ExQuestion() {
  const [value, setValue] = useState("");

  return (
    <Flex justify={"center"}>
      <Accordion allowMultiple px={20} w={"500px"}>
        {/*ITEMS_TRIAL.map((q) => (
        <AccordionItem key={q.Label}>
          <AccordionButton>
            {q.Label}
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>{q.Content}</AccordionPanel>
        </AccordionItem>
      ))*/}
        <AccordionItem key="MCSingle">
          <AccordionButton>
            Q1
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <MCSingleQuestion getValue={setValue} />
            <Text>This is the Value: {value}</Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem key="MCMulti">
          <AccordionButton>
            Q2
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <MCMultiQuestion />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem key="FillQuestion">
          <AccordionButton>
            Q3
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <FillQUestion />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}
