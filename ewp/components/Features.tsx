import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BiMath } from "react-icons/bi";
import { GiTrackedRobot, GiMaterialsScience } from "react-icons/gi"
import { SlChemistry } from "react-icons/sl"

const Features = () => {
  return (
    <div className="flex w-full justify-center gap-4 flex-wrap">
      <Card className="w-[150px] h-[150px]">
        <CardHeader>
          <CardTitle className="flex w-full justify-center">Chemistry</CardTitle>
        </CardHeader>
        <CardContent className="flex w-full justify-center text-5xl">
          <SlChemistry />
        </CardContent>
      </Card>
      <Card className="w-[150px] h-[150px]">
        <CardHeader>
          <CardTitle className="flex w-full justify-center">Math</CardTitle>
        </CardHeader>
        <CardContent className="flex w-full justify-center text-5xl">
          <BiMath />
        </CardContent>
      </Card>
      <Card className="w-[150px] h-[150px]">
        <CardHeader>
          <CardTitle className="flex w-full justify-center">Mechatronics</CardTitle>
        </CardHeader>
        <CardContent className="flex w-full justify-center text-5xl">
          <GiTrackedRobot />
        </CardContent>
      </Card>
      <Card className="w-[150px] h-[150px]">
        <CardHeader>
          <CardTitle className="flex w-full justify-center">Physics</CardTitle>
        </CardHeader>
        <CardContent className="flex w-full justify-center text-5xl">
          <GiMaterialsScience />
        </CardContent>
      </Card>
    </div>
  );
};

export default Features;
