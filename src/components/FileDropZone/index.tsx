import React from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import clsx from "clsx";

interface FileDropzoneProps {
  index: number;
  fileValidation?: boolean;
  handleDrop: (acceptedFiles: File[], index: number) => void;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({
  index,
  fileValidation,
  handleDrop,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => handleDrop(acceptedFiles, index),
  });

  return (
    <div
      {...getRootProps()}
      className="dropzone-class"
      data-testid={`file-dropzone-${index}`}
    >
      <input {...getInputProps()} />
      <>
        <div
          className={clsx(
            "rounded-xl border-2 border-dashed py-8 text-center text-sm bg-white cursor-pointer",
            fileValidation && "bg-red-50"
          )}
        >
          <Image
            src="/assets/images/upload-cloud.svg"
            className="mx-auto"
            alt="Upload Cloud"
            width={24}
            height={24}
          />
          <div className="mt-4">Choose a file or drag & drop it here</div>
          <div className="text-tertiary text-xs">
            JPEG, PNG, PDF, and MP4 formats, up to 50 MB
          </div>
          <div className="mt-4 px-4 py-[6px] text-white bg-black rounded-lg inline-block">
            Browse files
          </div>
          {fileValidation && (
            <div className="text-red-500 font-bold text-xs text-center mt-2">
              This field required
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default FileDropzone;
