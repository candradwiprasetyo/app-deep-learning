import Image from "next/image";

type FormTextareaProps = {
  handleAddContent: () => void;
};

export default function ButtonAddContent({
  handleAddContent,
}: FormTextareaProps) {
  return (
    <button
      type="button"
      onClick={handleAddContent}
      className="bg-black py-[6px] text-center w-full rounded text-white flex gap-2 justify-center items-center"
      data-testid="add-content-button"
    >
      <Image
        className="mb-[2px]"
        src="/assets/images/plus-white.svg"
        alt="Plus White"
        width={16}
        height={16}
      />
      <span data-testid="add-content-text">Add Content</span>
    </button>
  );
}
