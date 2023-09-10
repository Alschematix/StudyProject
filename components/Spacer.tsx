interface Props {
  height: number;
}

export default function Spacer({ height }: Props) {
  return <div className={`h-${height}`} />;
}
