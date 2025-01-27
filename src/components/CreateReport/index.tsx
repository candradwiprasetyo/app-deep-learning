import Image from "next/image";
import Link from "next/link";

export default function CreateReport() {
  return (
    <div className="w-full flex items-center justify-center h-full bg-tertiary md:bg-secondary py-10 md:py-0">
      <div className="text-center">
        <Image
          className="mx-auto"
          src="/assets/images/pattern.svg"
          alt="Message Chat Circle"
          width={240}
          height={240}
        />
        <div className="text-2xl mt-12 font-medium">
          Not sure where to start
        </div>
        <div className="text-[13px] text-secondary mt-2">
          Try to upload your documents
        </div>
        <Link href="/create">
          <div className="py-3 bg-button px-16 text-white mt-4">
            Create Report Doc
          </div>
        </Link>
      </div>
    </div>
  );
}
