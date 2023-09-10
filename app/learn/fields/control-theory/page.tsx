import CardLayout from "../../components/CardLayout";

const elements = new Map([
    ["Control Theory Element 1", "../../learn/fields/control-theory/control-theory-1"],
    ["Control Theory Element 2", "../../learn/fields/control-theory/control-theory-2"],
    ["Control Theory Element 3", "../../learn/fields/control-theory/control-theory-3"],
    ["Control Theory Element 4", "../../learn/fields/control-theory/control-theory-4"],
  ]);

export default function ControlTheory() {
  return (
    <>
      <div className="flex flex-col  items-center w-full h-[80vh]">
        <h1 className="flex h-[20vh] items-end text-3xl font-bold">Control Theory</h1>
        <div className="flex flex-wrap items-center justify-center w-full h-full gap-4">
          <CardLayout titles={elements}></CardLayout>
        </div>
      </div>
    </>
  );
}
