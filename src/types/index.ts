export type DocumentType = {
  id: number;
  title: string;
  description: string;
};

export type MenuType = {
  id: number;
  name: string;
  url: string;
  icon: string;
  isActive: boolean;
};

export type ContentType = {
  title: string;
  description: string;
  file: File | null;
  pdfText: string;
  fileValidation?: boolean;
  [key: string]: string | number | boolean | File | null | undefined;
}[];

export type HandleInputChangeType = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  index: number,
  field: string
) => void;

export type ChatType = {
  id: number;
  type: "sender" | "recipient";
  message: string;
};

export interface TextItemType {
  str: string;
}

export type HandleSubmitType = (e: React.FormEvent<HTMLFormElement>) => void;

export type HandleDrop = (acceptedFiles: File[], index: number) => void;

export type ExtractTextFromPdfType = (file: File, index: number) => void;
