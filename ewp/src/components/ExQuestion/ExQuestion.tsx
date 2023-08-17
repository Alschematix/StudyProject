import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
const ITEMS_TRIAL = [
  { Label: "Acc 1", Content: "Acc 1 Questions" },
  { Label: "Acc 2", Content: "Acc 2 Questions" },
  { Label: "Acc 3", Content: "Acc 3 Questions" },
];
export default function ExQuestion() {
  return (
    <Accordion allowMultiple>
      {ITEMS_TRIAL.map((q) => (
        <AccordionItem key={q.Label}>
          <AccordionButton>
            {q.Label}
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>{q.Content}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
