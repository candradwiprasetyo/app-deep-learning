import { render, screen } from "@testing-library/react";
import DocumentList from "../List";
import { DocumentType } from "@/types";
import "@testing-library/jest-dom";

describe("DocumentList Component", () => {
  it("renders the document title correctly", () => {
    const mockDocument: DocumentType = {
      id: 1,
      title: "Sample Document",
      description: "This is a sample description for the document.",
    };

    render(<DocumentList {...mockDocument} />);
    expect(screen.getByText(mockDocument.title)).toBeInTheDocument();
  });

  it("renders the document description correctly", () => {
    const mockDocument: DocumentType = {
      id: 1,
      title: "Sample Document",
      description: "This is a sample description for the document.",
    };

    render(<DocumentList {...mockDocument} />);
    expect(screen.getByText(mockDocument.description)).toBeInTheDocument();
  });

  it("has the correct class names for styling", () => {
    const mockDocument: DocumentType = {
      id: 2,
      title: "Another Document",
      description: "This document has a different description.",
    };

    const { container } = render(<DocumentList {...mockDocument} />);

    const documentDiv = container.firstChild;
    expect(documentDiv).toHaveClass("bg-tertiary py-2 px-3 rounded-lg");
  });
});
