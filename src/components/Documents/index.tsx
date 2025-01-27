import Image from "next/image";
import Link from "next/link";
import DocumentList from "./List";
import { documents } from "@/data/documents";

export default function Documents() {
  return (
    <div className="md:w-[296px] bg-white py-[18px] px-[14px] border-r">
      <div className="flex justify-between">
        Explore
        <Image
          src="/assets/images/search.svg"
          alt="Search"
          width={20}
          height={20}
        />
      </div>
      <Link href="/create">
        <div className="py-3 flex justify-center gap-2 mt-3 button-shadow border rounded-lg">
          <Image
            className="flex-none"
            src="/assets/images/plus.svg"
            alt="Plus"
            width={14}
            height={14}
          />
          <span className="text-sm">Create New</span>
        </div>
      </Link>
      <div className="mt-5 flex gap-1">
        <Image
          className="flex-none"
          src="/assets/images/message-chat-circle.svg"
          alt="Message Chat Circle"
          width={16}
          height={16}
        />
        <span className="text-tertiary text-sm">List of Documents</span>
      </div>
      <div className="grid grid-cols-1 mt-2 gap-2">
        {documents.map((document) => (
          <DocumentList
            key={document.id}
            id={document.id}
            title={document.title}
            description={document.description}
          />
        ))}
      </div>
    </div>
  );
}
