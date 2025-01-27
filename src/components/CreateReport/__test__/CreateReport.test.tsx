import { render, screen } from "@testing-library/react";
import CreateReport from "../index";
import "@testing-library/jest-dom";
import mockRouter from "next-router-mock";
import { jest } from "@jest/globals";

jest.mock("next/image", () => {
  return function MockedImage({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  }) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt || "mocked image"}
        width={width}
        height={height}
      />
    );
  };
});
jest.mock("next/link", () => {
  const MockedLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => <a href={href}>{children}</a>;
  MockedLink.displayName = "Link";
  return MockedLink;
});

jest.mock("next/router", () => mockRouter);

describe("CreateReport Component", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });

  it("renders the component correctly", () => {
    render(<CreateReport />);

    const image = screen.getByAltText("Message Chat Circle");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/assets/images/pattern.svg");
    expect(screen.getByText("Not sure where to start")).toBeInTheDocument();
    expect(
      screen.getByText("Try to upload your documents")
    ).toBeInTheDocument();

    const link = screen.getByRole("link", { name: /Create Report Doc/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/create");
  });

  it("renders the button with correct value", () => {
    render(<CreateReport />);
    const button = screen.getByText("Create Report Doc");
    expect(button).toBeInTheDocument();
  });
});
