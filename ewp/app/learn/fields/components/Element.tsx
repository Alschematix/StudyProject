import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea"
import Comments from "./Comments";
import { TextareaWithButton } from "@/components/ui/textarea-with-button";

interface Props {
  contributor: Array<string>;
  numOfComments?: number;
}

export default function Element({ contributor }: Props) {
  // Create a function to convert the HTML string to HTML elements
  const createMarkup = (html: string) => {
    return { __html: html };
  };

  const contrib = contributor[0];
  const date = contributor[1];
  const title = contributor[2];
  const prereq = contributor[3];
  const html = contributor[4];

  const comments: string[][] = [
    ["/../stockuser.png", "user", "i don't get it", "2023/09/03"],
    ["/../stockuser.png", "user2", "i hate math!!!", "2023/09/04"],
  ];

  const numOfComments = comments.length;

  return (
    <>
      <div className="flex flex-col items-center w-full ">
        <div className="flex flex-col w-[80%] rounded-md border-[0.5px] border-tertiary mt-8 shadow-lg bg-card">
          <div className="flex flex-col p-4">
            <span>Contributor: {contrib}</span>
            <span>Date: {date}</span>
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full h-full border-t-[0.5px] border-tertiary">
              <div className="flex flex-wrap justify-between p-4">
                <h2 className="text-2xl font-bold">Definition of Term</h2>
                <h1 className="text-4xl font-bold">{title}</h1>
                <h3 className="text-xl font-bold">Completed</h3>
              </div>
              <Accordion type="multiple" className="p-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Prerequisites</AccordionTrigger>
                  <AccordionContent>{prereq}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Content</AccordionTrigger>
                  <AccordionContent>
                    {/* Use dangerouslySetInnerHTML to render the HTML */}
                    <div dangerouslySetInnerHTML={createMarkup(html)} />
                    <div className="flex flex-wrap justify-between gap-4 mt-4">
                      <span>{numOfComments} Comments</span>
                      {comments.map((item) => (
                        <Comments
                          image={item[0]}
                          user={item[1]}
                          comment={item[2]}
                          datetime={item[3]}
                        />
                      ))}
                      <div className="w-full m-2"><TextareaWithButton /></div>
                      
                      
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
