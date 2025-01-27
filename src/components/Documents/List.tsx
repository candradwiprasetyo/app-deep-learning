import { DocumentType } from "@/types";

export default function DocumentList({ id, title, description }: DocumentType) {
  return (
    <div className="bg-tertiary py-2 px-3 rounded-lg" key={id}>
      <div className="font-bold text-sm">{title}</div>
      <div className="mt-2 text-xs">{description}</div>
    </div>
  );
}
