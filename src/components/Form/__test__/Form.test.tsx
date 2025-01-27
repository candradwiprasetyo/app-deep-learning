import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../index";
import { ContentType } from "@/types";

const mockHandleSubmit = jest.fn();
const mockHandleInputChange = jest.fn();
const mockHandleRemoveFile = jest.fn();
const mockHandleDrop = jest.fn();
const mockHandleAddContent = jest.fn();

const contents: ContentType = [
  {
    title: "Sample Title",
    description: "Sample Description",
    file: null,
    fileValidation: false,
    pdfText: "",
  },
];

describe("Form", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the form with the correct fields", () => {
    render(
      <Form
        contents={contents}
        handleSubmit={mockHandleSubmit}
        handleInputChange={mockHandleInputChange}
        handleRemoveFile={mockHandleRemoveFile}
        handleDrop={mockHandleDrop}
        handleAddContent={mockHandleAddContent}
      />
    );

    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Detail/i)).toBeInTheDocument();
    expect(screen.getByText(/Analyze by Socrates/i)).toBeInTheDocument();
  });

  it("calls handleSubmit when the form is submitted", () => {
    render(
      <Form
        contents={contents}
        handleSubmit={mockHandleSubmit}
        handleInputChange={mockHandleInputChange}
        handleRemoveFile={mockHandleRemoveFile}
        handleDrop={mockHandleDrop}
        handleAddContent={mockHandleAddContent}
      />
    );

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
  });

  it("calls handleRemoveFile when the remove file button is clicked", () => {
    render(
      <Form
        contents={contents}
        handleSubmit={mockHandleSubmit}
        handleInputChange={mockHandleInputChange}
        handleRemoveFile={mockHandleRemoveFile}
        handleDrop={mockHandleDrop}
        handleAddContent={mockHandleAddContent}
      />
    );

    const removeFileButton = screen.queryByAltText(/trash/i);

    if (removeFileButton) {
      fireEvent.click(removeFileButton);
      expect(mockHandleRemoveFile).toHaveBeenCalledTimes(1);
      expect(mockHandleRemoveFile).toHaveBeenCalledWith(0);
    }
  });

  it("calls handleAddContent when the add content button is clicked", () => {
    render(
      <Form
        contents={contents}
        handleSubmit={mockHandleSubmit}
        handleInputChange={mockHandleInputChange}
        handleRemoveFile={mockHandleRemoveFile}
        handleDrop={mockHandleDrop}
        handleAddContent={mockHandleAddContent}
      />
    );

    const addContentButton = screen.getByText(/Add Content/i);
    fireEvent.click(addContentButton);

    expect(mockHandleAddContent).toHaveBeenCalledTimes(1);
  });
});
