import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Props {
  holder: string;
}

export function InputWithButton({holder}:Props) {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder={holder} />
      <Button type="submit">Search</Button>
    </div>
  )
}
