import {
  ContentType,
  HandleInputChangeType,
  HandleSubmitType,
  HandleDrop,
} from "@/types";
import FormTextarea from "./FormTextarea";
import FormDocument from "./FormDocument";
import ButtonAddContent from "./ButtonAddContent";
import ButtonSubmit from "./ButtonSubmit";

type FormProps = {
  contents: ContentType;
  handleSubmit: HandleSubmitType;
  handleInputChange: HandleInputChangeType;
  handleRemoveFile: (index: number) => void;
  handleDrop: HandleDrop;
  handleAddContent: () => void;
};

export default function Form({
  contents,
  handleSubmit,
  handleInputChange,
  handleRemoveFile,
  handleDrop,
  handleAddContent,
}: FormProps) {
  return (
    <form onSubmit={handleSubmit} role="form">
      <div className="divide-y-2 divide-dashed">
        {contents.map((content, index) => {
          return (
            <div key={index} className="py-4 text-sm">
              <FormTextarea
                index={index}
                label="Title"
                title={content.title}
                placeholder="Type title here"
                data="title"
                handleInputChange={handleInputChange}
              />
              <FormDocument
                file={content.file}
                index={index}
                fileValidation={content.fileValidation}
                handleRemoveFile={handleRemoveFile}
                handleDrop={handleDrop}
              />
              <FormTextarea
                index={index}
                label="Detail"
                title={content.description}
                placeholder="Type detail here"
                data="description"
                handleInputChange={handleInputChange}
              />
            </div>
          );
        })}
      </div>
      <ButtonAddContent handleAddContent={handleAddContent} />
      <ButtonSubmit />
    </form>
  );
}
