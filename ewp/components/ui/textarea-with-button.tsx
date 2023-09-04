"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2 ">
      <Textarea  className="border-tertiary border-[0.5px]" placeholder="Type your message here." />
      <Button>Add Comment</Button>
    </div>
  )
}
