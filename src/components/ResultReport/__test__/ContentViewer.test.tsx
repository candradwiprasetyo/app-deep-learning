import { render, screen } from "@testing-library/react";
import ContentViewer from "../ContentViewer";
import { ContentType } from "@/types";

global.URL.createObjectURL = jest.fn(() => "mocked-url");

describe("ContentViewer", () => {
  test("renders content when there are contents with file and text", () => {
    const contents: ContentType = [
      {
        id: 1,
        title: "Title document",
        description: "Description document",
        file: new File(["dummy content"], "file.pdf", {
          type: "application/pdf",
        }),
        pdfText: "This is some content from the PDF",
      },
    ];

    const { container } = render(<ContentViewer contents={contents} />);
    const embedElement = container.querySelector("embed");
    expect(embedElement).toHaveAttribute("src", "mocked-url");
    expect(
      screen.getByText("This is some content from the PDF")
    ).toBeInTheDocument();
  });

  test("renders content when there is content without file", () => {
    const contents: ContentType = [
      {
        id: 1,
        title: "Title document",
        description: "Description document",
        file: null,
        pdfText: "This content has no file",
      },
    ];

    render(<ContentViewer contents={contents} />);
    expect(screen.queryByRole("img")).toBeNull();
    expect(screen.getByText("This content has no file")).toBeInTheDocument();
  });

  test("renders multiple contents", () => {
    const contents: ContentType = [
      {
        id: 1,
        title: "Title document",
        description: "Description document",
        file: new File(["dummy content"], "file1.pdf", {
          type: "application/pdf",
        }),
        pdfText: "Content 1",
      },
      {
        id: 2,
        title: "Title document 2",
        description: "Description document 2",
        file: null,
        pdfText: "Content 2 without file",
      },
    ];

    const { container } = render(<ContentViewer contents={contents} />);
    const embedElement = container.querySelector("embed");
    expect(embedElement).toHaveAttribute("src", "mocked-url");
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.getByText("Content 2 without file")).toBeInTheDocument();
  });
});
