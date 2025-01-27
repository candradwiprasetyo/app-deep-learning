type SenderProps = {
  message: string;
};

export default function Sender({ message }: SenderProps) {
  return (
    <div className="flex gap-[10px] items-start justify-end sender">
      <div className="p-4 border rounded-[18px] rounded-tr-none w-[calc(100%-116px)]">
        {message}
      </div>
      <div
        className="h-12 w-12 bg-[#ACAFBE] rounded-full flex-none"
        role="img"
      ></div>
    </div>
  );
}
