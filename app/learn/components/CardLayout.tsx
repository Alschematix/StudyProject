import { Card } from "@/components/ui/card";
import Link from "next/link";

interface Props {
  titles: Map<string, string>;
}

// This function takes the Map and assigns the key as the title and value as the link
export default function CardLayout({ titles }: Props) {
  const titleArray = Array.from(titles.entries()); // Convert the Map to an array of key-value pairs

  return (
    <>
      {titleArray.map(([title, link]) => (
        <Link href={link}>
            <Card className="w-[200px] h-[200px]" key={link}>
              <div className="flex items-center justify-center w-full h-full text-2xl font-bold">
                {title}
              </div>
            </Card>
        </Link>
      ))}
    </>
  );
}
