import CardLayout from "../components/CardLayout";

// Map of topic titles and the link to that topic page
const elements = new Map([
    ["Control Theory", "./fields/control-theory"],
    ["Electrical Components", "./fields/electrical-components"],
    ["Math", "./fields/math"],
    ["Physics", "./fields/physics"],
  ]);

export default function Physics() {
  return (
    <>
      <div className="flex flex-col  items-center w-full h-[80vh]">
        <h1 className="flex h-[20vh] items-end text-3xl font-bold">Fields</h1>
        <div className="flex flex-wrap items-center justify-center w-full h-full gap-4">
          <CardLayout titles={elements}></CardLayout>
        </div>
      </div>
    </>
  );
}
