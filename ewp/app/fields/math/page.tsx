import CardLayout from "../components/CardLayout";

const elements = new Map([
    ["Math Element 1", "../math/math-1"],
    ["Math Element 2", "../math/math-2"],
    ["Math Element 3", "../math/math-3"],
    ["Math Element 4", "../math/math-4"],
  ]);

export default function Math() {
  return (
    <>
      <div className="flex flex-col  items-center w-full h-[80vh]">
        <h1 className="flex h-[20vh] items-end text-3xl font-bold">Math</h1>
        <div className="flex flex-wrap items-center justify-center w-full h-full gap-4">
          <CardLayout titles={elements}></CardLayout>
        </div>
      </div>
    </>
  );
}
