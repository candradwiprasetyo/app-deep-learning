import Image from "next/image";

type RecipientProps = {
  message: string;
};

export default function Recipient({ message }: RecipientProps) {
  return (
    <div className="flex gap-[10px] items-start recipient">
      <Image
        src="/assets/images/logo-white.svg"
        alt="Logo White"
        width={48}
        height={48}
      />
      <div className="p-4 border rounded-[18px] rounded-tl-none w-full">
        {message}
      </div>
    </div>
  );
}
