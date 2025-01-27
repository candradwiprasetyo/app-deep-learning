import { render, screen } from "@testing-library/react";
import ButtonSubmit from "../ButtonSubmit";
describe("ButtonSubmit", () => {
  it("renders the button with correct text", () => {
    render(<ButtonSubmit />);
    const button = screen.getByRole("button", { name: /Analyze by Socrates/i });
    expect(button).toBeInTheDocument();
  });

  it("has the correct styling", () => {
    render(<ButtonSubmit />);
    const button = screen.getByRole("button", { name: /Analyze by Socrates/i });
    expect(button).toHaveClass(
      "py-3 bg-button px-16 text-white mt-4 float-right w-full md:w-auto mb-8"
    );
  });

  it("has the correct type", () => {
    render(<ButtonSubmit />);
    const button = screen.getByRole("button", { name: /Analyze by Socrates/i });
    expect(button).toHaveAttribute("type", "submit");
  });
});
