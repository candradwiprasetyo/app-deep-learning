import { render, screen, fireEvent } from "@testing-library/react";
import ButtonAddContent from "../ButtonAddContent";

describe("ButtonAddContent", () => {
  it("renders the Add Content button with an image and text", () => {
    render(<ButtonAddContent handleAddContent={() => {}} />);

    const button = screen.getByTestId("add-content-button");
    expect(button).toBeInTheDocument();
    const text = screen.getByTestId("add-content-text");
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("Add Content");
  });

  it("calls handleAddContent when the button is clicked", () => {
    const handleAddContent = jest.fn();
    render(<ButtonAddContent handleAddContent={handleAddContent} />);

    const button = screen.getByTestId("add-content-button");
    fireEvent.click(button);

    expect(handleAddContent).toHaveBeenCalledTimes(1);
  });
});
