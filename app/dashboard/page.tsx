"use client";
import { Card } from "@/components/ui/card";
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Week 1", uv: 400, pv: 2400, amt: 2400 },
  { name: "Week 2", uv: 100, pv: 2600, amt: 3000 },
  { name: "Week 3", uv: 150, pv: 500, amt: 2500 },
  { name: "Week 4", uv: 300, pv: 2600, amt: 3000 },
  { name: "Week 5", uv: 400, pv: 2600, amt: 3000 },
  { name: "Week 6", uv: 600, pv: 2600, amt: 3000 },
  { name: "Week 7", uv: 400, pv: 2600, amt: 3000 },
  { name: "Week 8", uv: 100, pv: 2600, amt: 3000 },
];

export default function Dashboard() {
  return (
    <div className="w-full h-full p-4">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {/* Grid items */}
        <Card className="h-32 col-span-1 p-4">Item 1</Card>
        <Card className="h-32 p-4">Item 2</Card>
        <Card className="h-32 p-4">Item 3</Card>
        <Card className="h-32 p-4">Item 4</Card>
        <Card className="flex p-4 h-[500px] col-span-2 justify-center items-center">
          <LineChart
            width={700}
            height={400}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#aaa" strokeDasharray="5 10" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </Card>
        <Card className="flex p-4 h-[500px] col-span-2 justify-center items-center"></Card>
        
      </div>
    </div>
  );
}
