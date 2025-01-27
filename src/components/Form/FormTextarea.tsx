import { HandleInputChangeType } from "@/types";

type FormTextareaProps = {
  index: number;
  label: string;
  title: string;
  placeholder: string;
  data: string;
  handleInputChange: HandleInputChangeType;
};

export default function FormTextarea({
  index,
  label,
  title,
  placeholder,
  data,
  handleInputChange,
}: FormTextareaProps) {
  return (
    <div className="mb-4" data-testid={`form-textarea-${index}`}>
      <label
        htmlFor={`title-${index}`}
        className="block font-medium mb-2"
        data-testid={`label-${index}`}
      >
        {label}
      </label>
      <textarea
        id={`title-${index}`}
        placeholder={placeholder}
        className="rounded-lg border py-2 px-3 w-full"
        value={title}
        onChange={(e) => handleInputChange(e, index, data)}
        required
        data-testid={`textarea-${index}`}
      />
    </div>
  );
}
