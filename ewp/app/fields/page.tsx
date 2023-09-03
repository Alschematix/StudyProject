import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Fields() {
  return (
    <>
      <div className="flex flex-col  items-center w-full h-[80vh]">
        <h1 className="flex h-[20vh] items-end text-3xl font-bold">Fields</h1>
        <div className="flex flex-wrap items-center justify-center w-full h-full gap-4">
          <Card className="w-[200px] h-[200px]">
            <div className="flex items-center justify-center w-full h-full text-2xl font-bold">
              Control Theory
            </div>
          </Card>
          <Card className="w-[200px] h-[200px]">
            <div className="flex items-center justify-center w-full h-full text-sm font-bold">
              Electrical Components
            </div>
          </Card>
          <Card className="w-[200px] h-[200px]">
            <div className="flex items-center justify-center w-full h-full text-2xl font-bold">
              Math
            </div>
          </Card>
          <Card className="w-[200px] h-[200px]">
            <div className="flex items-center justify-center w-full h-full text-2xl font-bold">
              Physics
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
