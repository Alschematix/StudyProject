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

export default function ExQuestion() {
  const [value, setValue] = useState("");
  const ITEMS_TRIAL = [
    {
      label: "SubjEx1",
      type: "MCSingle",
      content: {
        question: "Who is the product Owner?",
        answerKey: [
          { Item: "Paul", isAns: false },
          { Item: "Alex", isAns: true },
          { Item: "Zach", isAns: false },
          { Item: "Jonathan", isAns: false },
          { Item: "Ty", isAns: false },
        ],
      },
    },
    {
      label: "SubjEx2",
      type: "MCMulti",
      content: {
        question: "Who are the developers?",
        answerKey: [
          { Item: "paul", isAns: true },
          { Item: "Alex", isAns: false },
          { Item: "Zach", isAns: true },
          { Item: "Jonathan", isAns: true },
          { Item: "Ty", isAns: true },
        ],
      },
    },
    {
      label: "SubjEx3",
      type: "Fill",
      content: {
        question:
          "Paul's favorite animal is a [blank], which is also his Discord Profile Picture.",
        answerKey: [{ Item: "Cappybara", isAns: true }],
      },
    },
  ];

  return (
    <Flex justify={"center"}>
      <Accordion allowMultiple px={20} w={"800px"}>
        {ITEMS_TRIAL.map((q, i) => (
          <AccordionItem key={q.label}>
            <AccordionButton>
              Question {i + 1}
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {q.type === "MCSingle" ? (
                <>
                  <MCSingleQuestion getValue={setValue} {...q} />
                  <Text>The Value is: {value}</Text>
                </>
              ) : q.type === "MCMulti" ? (
                <MCMultiQuestion {...q.content} />
              ) : (
                q.type === "Fill" && <FillQUestion {...q.content} />
              )}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
}
