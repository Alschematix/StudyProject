import CardLayout from "../../components/CardLayout";

const elements = new Map([
    ["Electrical Components Element 1", "../../learn/fields/electrical-components/electrical-components-1"],
    ["Electrical Components Element 2", "../../learn/fields/electrical-components/electrical-components-2"],
    ["Electrical Components Element 3", "../../learn/fields/electrical-components/electrical-components-3"],
    ["Electrical Components Element 4", "../../learn/fields/electrical-components/electrical-components-4"],
  ]);

export default function ElectricalComponents() {
  return (
    <>
      <div className="flex flex-col  items-center w-full h-[80vh]">
        <h1 className="flex h-[20vh] items-end text-3xl font-bold">Electrical Components</h1>
        <div className="flex flex-wrap items-center justify-center w-full h-full gap-4">
          <CardLayout titles={elements}></CardLayout>
        </div>
      </div>
    </>
  );
}
