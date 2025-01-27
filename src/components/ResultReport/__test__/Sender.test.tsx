import { render, screen } from "@testing-library/react";
import Sender from "../Sender";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, src }: { alt: string; src: string }) => (
    <img alt={alt} src={src} />
  ),
}));

describe("Sender", () => {
  test("renders the message prop correctly", () => {
    const testMessage = "Hello from the sender!";

    render(<Sender message={testMessage} />);
    const messageElement = screen.getByText(testMessage);
    expect(messageElement).toBeInTheDocument();
  });

  test("renders the image circle with the correct styling", () => {
    render(<Sender message="Test message" />);

    const imageDiv = screen.getByRole("img");
    expect(imageDiv).toBeInTheDocument();
    expect(imageDiv).toHaveClass("h-12 w-12 bg-[#ACAFBE] rounded-full");
  });

  test("renders the component with the correct styling", () => {
    render(<Sender message="Test message" />);

    const senderDiv = screen.getByText("Test message").closest("div");
    expect(senderDiv).toHaveClass(
      "p-4 border rounded-[18px] rounded-tr-none w-[calc(100%-116px)]"
    );
  });
});
