declare module "pdfjs-dist/webpack" {
  import { PDFDocumentProxy, PDFWorker, GlobalWorkerOptions } from "pdfjs-dist";

  export function getDocument(src: string | Uint8Array | ArrayBuffer): {
    promise: Promise<PDFDocumentProxy>;
  };

  export const GlobalWorkerOptions: typeof GlobalWorkerOptions;
  export const PDFWorker: typeof PDFWorker;
}
