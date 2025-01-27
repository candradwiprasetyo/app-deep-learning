import { render, screen } from "@testing-library/react";
import Recipient from "../Recipient";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, src }: { alt: string; src: string }) => (
    <img alt={alt} src={src} />
  ),
}));

describe("Recipient", () => {
  test("renders the message prop correctly", () => {
    const testMessage = "Hello, this is a test message!";
    render(<Recipient message={testMessage} />);
    const messageElement = screen.getByText(testMessage);
    expect(messageElement).toBeInTheDocument();
  });

  test("renders the image with correct src and alt attributes", () => {
    render(<Recipient message="Test message" />);
    const imageElement = screen.getByAltText("Logo White");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "/assets/images/logo-white.svg"
    );
  });

  test("renders the component with the correct styling", () => {
    render(<Recipient message="Test message" />);
    const recipientDiv = screen.getByText("Test message").closest("div");
    expect(recipientDiv).toHaveClass(
      "p-4 border rounded-[18px] rounded-tl-none w-full"
    );
  });
});
