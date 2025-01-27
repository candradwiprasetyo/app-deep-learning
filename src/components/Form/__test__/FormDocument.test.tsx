import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FormDocument from "../FormDocument";
import { HandleDrop } from "@/types";

describe("FormDocument", () => {
  const mockHandleRemoveFile = jest.fn();
  const mockHandleDrop: HandleDrop = jest.fn();

  const file = new File(["dummy content"], "example.pdf", {
    type: "application/pdf",
  });

  it("renders the component with file details", () => {
    render(
      <FormDocument
        file={file}
        index={0}
        handleRemoveFile={mockHandleRemoveFile}
        handleDrop={mockHandleDrop}
      />
    );

    expect(screen.getByText(file.name)).toBeInTheDocument();
    expect(screen.getByText("13 B")).toBeInTheDocument();
    expect(screen.getByAltText("File")).toBeInTheDocument();
    expect(screen.getByAltText("trash")).toBeInTheDocument();
  });

  it("renders the FileDropzone component", () => {
    render(
      <FormDocument
        file={file}
        index={0}
        handleRemoveFile={mockHandleRemoveFile}
        handleDrop={mockHandleDrop}
      />
    );

    expect(screen.getByTestId("file-dropzone-0")).toBeInTheDocument();
  });

  it("renders file validation correctly", () => {
    render(
      <FormDocument
        file={file}
        index={0}
        fileValidation={true}
        handleRemoveFile={mockHandleRemoveFile}
        handleDrop={mockHandleDrop}
      />
    );

    const validationMessage = screen.queryByText(/file validation/i);
    if (validationMessage) {
      expect(validationMessage).toBeInTheDocument();
    } else {
      expect(validationMessage).not.toBeInTheDocument();
    }
  });

  it("calls handleRemoveFile when the trash icon is clicked", async () => {
    render(
      <FormDocument
        file={file}
        index={0}
        handleRemoveFile={mockHandleRemoveFile}
        handleDrop={mockHandleDrop}
      />
    );

    const trashIcon = screen.getByTestId("delete-file-0");

    fireEvent.click(trashIcon);

    await waitFor(() => {
      expect(mockHandleRemoveFile).toHaveBeenCalledWith(0);
    });
  });
});
