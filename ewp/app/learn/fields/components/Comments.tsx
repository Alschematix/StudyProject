import { User } from "@/components/User";
import { Card } from "@/components/ui/card";

interface Props {
  image: string;
  user: string;
  comment: string;
  datetime: string;
}

export default function Comments({
  image,
  user,
  comment,
  datetime,
}: Props) {
  return (
    <>
      <Card className="flex items-center w-full gap-2 p-4">
        <img
          src={image}
          className="object-cover w-8 h-8 border-[0.5px] rounded-full cursor-pointer border-tertiary"
        ></img>
        <div className="flex flex-col">
          <span>{user}</span>
          <span>{datetime}</span>
          <p>{comment}</p>
        </div>
      </Card>
    </>
  );
}
