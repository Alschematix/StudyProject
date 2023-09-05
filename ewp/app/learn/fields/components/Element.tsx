"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Comments from "./Comments";
import { TextareaWithButton } from "@/components/ui/textarea-with-button";
import { Checkbox } from "@/components/ui/checkbox";
import Bookmark from "./Bookmark";

interface Props {
  contributor: Array<string>;
  cIndex: number;
}

export default function Element({ contributor, cIndex }: Props) {
  // Create a function to convert the HTML string to HTML elements
  const createMarkup = (html: string) => {
    return { __html: html };
  };

  //   assign contributor parameters to variables
  const contrib = contributor[0];
  const date = contributor[1];
  const title = contributor[2];
  const prereq = contributor[3];
  const html = contributor[4];

  //   store comments in array
  const comments: any[][] = [
    [0, "/../stockuser.png", "user", "i don't get it", "2023/09/03"],
    [0, "/../stockuser.png", "user2", "i hate math!!!", "2023/09/04"],
  ];

  let numOfComments = 0;

  //   calculating if the ID of the comment matches the ID of the contribution, then renders the comments only on the contribution with that ID
  for (let i = 0; i < comments.length; i++) {
    comments[i][0] === cIndex ? numOfComments++ : null;
  }

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
                <h2 className="flex items-center text-2xl font-bold w-[359px] justify-center">
                  Definition of Term
                </h2>
                <div className="flex items-center gap-2 text-4xl font-bold w-[359px] justify-center">
                  <h1>{title}</h1>
                  <Bookmark
                    size={30}
                    color={"text-secondary"}
                    onClick={() => console.log("Clicked")}
                  />
                </div>

                <div className="flex items-center gap-2 w-[359px] justify-center">
                  <h3 className="text-xl font-bold">Completed</h3>
                  <Checkbox />
                </div>
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
                      {comments.map(
                        (item) =>
                          // Check if the ID of comments matches the index of the contributor
                          item[0] === cIndex && (
                            <Comments
                              image={item[1]}
                              user={item[2]}
                              comment={item[3]}
                              datetime={item[4]}
                            />
                          )
                      )}
                      <div className="w-full m-2">
                        <TextareaWithButton />
                      </div>
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
