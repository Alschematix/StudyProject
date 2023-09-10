import { Card } from "@/components/ui/card";

interface Props {
  image: string;
  user: string;
  comment: string;
  datetime: Date;
}

function formatTimeDifference(datetime: Date) {
  const commentDate = new Date(datetime);
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifferenceMillis = currentDate.getTime() - commentDate.getTime();

  // Convert milliseconds to seconds, minutes, or hours
  switch (true) {
    case timeDifferenceMillis < 1000:
      return `${timeDifferenceMillis}ms`;
    case timeDifferenceMillis < 60 * 1000:
      const seconds = Math.floor(timeDifferenceMillis / 1000);
      return `${seconds}s`;
    case timeDifferenceMillis < 60 * 60 * 1000:
      const minutes = Math.floor(timeDifferenceMillis / (60 * 1000));
      return `${minutes}m`;
    case timeDifferenceMillis < 24 * 60 * 60 * 1000:
      const hours = Math.floor(timeDifferenceMillis / (60 * 60 * 1000));
      return `${hours}h`;
    case timeDifferenceMillis < 7 * 24 * 60 * 60 * 1000:
      const days = Math.floor(timeDifferenceMillis / (24 * 60 * 60 * 1000));
      return `${days}d`;
    default:
      // Display the date and time
      const year = commentDate.getFullYear();
      const month = (commentDate.getMonth() + 1).toString().padStart(2, "0"); // Ensure two digits for month
      const day = commentDate.getDate().toString().padStart(2, "0"); // Ensure two digits for day
      return `${year}-${month}-${day}`;
  }
}

export default function Comments({ image, user, comment, datetime }: Props) {
  const timestamp = formatTimeDifference(datetime);

  return (
    <>
      <Card className="flex items-center w-full gap-2 p-4">
        <img
          src={image}
          className="object-cover w-8 h-8 border-[0.5px] rounded-full cursor-pointer border-tertiary"
        ></img>
        <div className="flex flex-col">
          <span>
            {user} • {timestamp}
          </span>

          <p>{comment}</p>
        </div>
      </Card>
    </>
  );
}
