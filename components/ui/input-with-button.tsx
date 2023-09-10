import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Props {
  holder: string;
  button: string;
}

export function InputWithButton({holder,button}:Props) {
  return (
    <div className="flex items-center w-full max-w-sm space-x-2">
      <Input type="text" placeholder={holder} />
      <Button type="submit">{button}</Button>
    </div>
  )
}
