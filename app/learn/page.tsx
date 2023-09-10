import CardLayout from "./components/CardLayout";

// Map of topic titles and the link to that topic page
const elements = new Map([
    ["Fields", "./learn/fields"],
    ["Applications", "./learn/applications"],
    ["Map", "./learn/map"],
    ["Dictionary", "./learn/dictionary"],
  ]);

export default function Learn() {
  return (
    <>
      <div className="flex flex-col  items-center w-full h-[80vh]">
        <h1 className="flex h-[20vh] items-end text-3xl font-bold">Learn</h1>
        <div className="flex flex-wrap items-center justify-center w-full h-full gap-4">
          <CardLayout titles={elements}></CardLayout>
        </div>
      </div>
    </>
  );
}
