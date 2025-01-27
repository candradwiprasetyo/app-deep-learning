import { ContentType } from "@/types";

type ContentViewerProps = {
  contents: ContentType;
};

export default function ContentViewer({ contents }: ContentViewerProps) {
  return (
    <div className="flex-1 px-8 py-4 h-[calc(100vh-100px)] overflow-auto">
      {contents.map((content, index) => (
        <div key={index} className="space-y-6">
          <div className="mt-4">
            {content.file && (
              <embed
                src={URL.createObjectURL(content.file)}
                type="application/pdf"
                width="100%"
                height="600px"
              />
            )}
          </div>
          <div className="mt-6 p-8 rounded-[32px] border">
            <div className="text-lg font-semibold mb-4">Content for prompt</div>
            <p className="whitespace-pre-wrap text-xs">{content.pdfText}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
