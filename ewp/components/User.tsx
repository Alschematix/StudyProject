"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoutButton from "./LogoutButton";

interface Props {
    user: string;
    image: string;
  }

export function User({user,image}:Props) {

  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <img src={image} className="object-cover w-8 h-8 border-[0.5px] rounded-full cursor-pointer border-tertiary"></img>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col justify-center w-full">
        <DropdownMenuItem className="flex">
         {user}
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-center">
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem  className="flex justify-center">
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem  className="flex justify-center">
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
