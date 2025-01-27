import { render, screen } from "@testing-library/react";
import InputChat from "../InputChat";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, src }: { alt: string; src: string }) => (
    /* eslint-disable @next/next/no-img-element */
    <img alt={alt} src={src} />
  ),
}));

describe("Recipient", () => {
  test("renders the input field with correct placeholder", () => {
    render(<InputChat />);
    const inputElement = screen.getByPlaceholderText("Ask DeepSkill");
    expect(inputElement).toBeInTheDocument();
  });

  test("renders the paperclip image", () => {
    render(<InputChat />);
    const imageElement = screen.getByAltText("Paperclip");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "/assets/images/paperclip.svg");
  });

  test("renders the send button with correct text and sparkle image", () => {
    render(<InputChat />);
    const sendText = screen.getByText("Send");
    expect(sendText).toBeInTheDocument();
    const sparkleImage = screen.getByAltText("Sparkle");
    expect(sparkleImage).toBeInTheDocument();
    expect(sparkleImage).toHaveAttribute("src", "/assets/images/sparkle.svg");
  });

  test("renders the component with correct structure", () => {
    render(<InputChat />);
    const inputElement = screen.getByPlaceholderText("Ask DeepSkill");
    const sendButton = screen.getByText("Send");
    expect(inputElement).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
  });
});
