import Image from "next/image";
import FileDropzone from "@/components/FileDropZone";
import { HandleDrop } from "@/types";

type FormDocumentProps = {
  file: File | null;
  index: number;
  fileValidation?: boolean;
  handleRemoveFile: (index: number) => void;
  handleDrop: HandleDrop;
};

export default function FormDocument({
  file,
  index,
  fileValidation,
  handleRemoveFile,
  handleDrop,
}: FormDocumentProps) {
  const humanFileSize = (size: number) => {
    var i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
    return (
      +(size / Math.pow(1024, i)).toFixed(2) * 1 +
      " " +
      ["B", "kB", "MB", "GB", "TB"][i]
    );
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={`document-${index}`}
        className="block text-sm font-medium mb-2"
      >
        Documents
      </label>
      {file && (
        <div className="rounded-lg border py-2 px-3 w-full flex items-center gap-2 bg-white mb-2 justify-between">
          <div className="flex gap-2 items-center">
            <div>
              <Image
                src="/assets/images/file.svg"
                alt="File"
                width={24}
                height={24}
              />
            </div>
            <div className="text-xs">
              <div className="font-semibold mb-[2px]">{file.name}</div>
              <div className="text-tertiary">{humanFileSize(file.size)}</div>
            </div>
          </div>
          <span
            data-testid={`delete-file-${index}`}
            onClick={() => {
              handleRemoveFile(index);
            }}
          >
            <Image
              className="cursor-pointer"
              src="/assets/images/trash.svg"
              alt="trash"
              width={16}
              height={16}
            />
          </span>
        </div>
      )}
      <FileDropzone
        index={index}
        handleDrop={handleDrop}
        fileValidation={fileValidation}
      />
    </div>
  );
}
