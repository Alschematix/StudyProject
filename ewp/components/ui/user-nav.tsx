import Link from "next/link";
import { cn } from "@/lib/utils";
import { Toggle } from "../Toggle";
import { Button } from "./button";
import { InputWithButton } from "./input-with-button";
import { PiApertureBold } from "react-icons/pi";
import { User } from "../User";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

interface Props {
  user: string;
  image: string;
}

export function UserNav({ user, image }: Props) {
  return (
    <header className="flex items-center w-full h-14 border-b-[0.5px] border-tertiary fixed z-10 bg-inherit">
      <div className="flex items-center justify-start gap-4 w-[60%] h-full px-4 z-10">
        <Button variant="outline" size="icon">
          <Link href="../../../#" className="text-2xl">
            <PiApertureBold />
          </Link>
        </Button>
        <div className="flex w-[60%] justify-evenly">
          <Link href="../../../#">Home</Link>
          <Link href="#">About</Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="cursor-pointer">Learn</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="w-full">
                <Link href="../../../learn">Learn Page</Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="w-full">
              <Link href="../../../learn/fields">Fields</Link>
              </DropdownMenuItem>
              
              <DropdownMenuItem><Link href="../../../../learn/applications">Applications</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="../../../../learn/map">Map</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="../../../../learn/dictionary">dictionary</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="#">Forum</Link>
        </div>
        <div className="w-30%">
          <InputWithButton holder={"Search"} button={"Search"}/>
        </div>
      </div>

      <div className="flex items-center justify-end gap-4 w-[40%] h-full px-4">
        <Link href={"../../../dashboard"}>Dashboard</Link>

        <Toggle />
        <User image={image} user={user} />
      </div>
      <div />
    </header>
  );
}
