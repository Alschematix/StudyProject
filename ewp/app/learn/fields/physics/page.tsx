import CardLayout from "../../components/CardLayout";

const elements = new Map([
    ["Physics Element 1", "../fields/physics/physics-1"],
    ["Physics Element 2", "../fields/physics/physics-2"],
    ["Physics Element 3", "../fields/physics/physics-3"],
    ["Physics Element 4", "../fields/physics/physics-4"],
  ]);

export default function Physics() {
  return (
    <>
      <div className="flex flex-col  items-center w-full h-[80vh]">
        <h1 className="flex h-[20vh] items-end text-3xl font-bold">Physics</h1>
        <div className="flex flex-wrap items-center justify-center w-full h-full gap-4">
          <CardLayout titles={elements}></CardLayout>
        </div>
      </div>
    </>
  );
}
