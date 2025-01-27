import { render, screen } from "@testing-library/react";
import ContentChat from "../ContentChat";
import { chats } from "@/data/chats";

jest.mock("../Recipient", () => ({
  __esModule: true,
  default: ({ message }: { message: string }) => (
    <div className="recipient">{message}</div>
  ),
}));

jest.mock("../Sender", () => ({
  __esModule: true,
  default: ({ message }: { message: string }) => (
    <div className="sender">{message}</div>
  ),
}));

jest.mock("../InputChat", () => ({
  __esModule: true,
  default: () => <input data-testid="input-chat" />,
}));

describe("ContentChat", () => {
  test("renders the chat messages with correct components", () => {
    render(<ContentChat />);

    chats.forEach((chat) => {
      const chatElement = screen.getByText(chat.message);
      expect(chatElement).toBeInTheDocument();

      if (chat.type === "recipient") {
        expect(chatElement).toHaveClass("recipient");
      } else {
        expect(chatElement).toHaveClass("sender");
      }
    });
  });

  test("renders the input chat component", () => {
    render(<ContentChat />);
    expect(screen.getByTestId("input-chat")).toBeInTheDocument();
  });
});
