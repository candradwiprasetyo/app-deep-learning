import { render, screen, fireEvent } from "@testing-library/react";
import Documents from "../index";
import { documents } from "@/data/documents";
import "@testing-library/jest-dom";
import { jest } from "@jest/globals";

jest.mock("next/image", () => {
  /* eslint-disable @next/next/no-img-element */
  const MockedImage = ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }) => <img src={src} alt={alt} width={width} height={height} />;
  MockedImage.displayName = "Image";
  return MockedImage;
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

describe("Documents Component", () => {
  it("renders the Documents component correctly", () => {
    render(<Documents />);

    expect(screen.getByText("Explore")).toBeInTheDocument();

    const searchImage = screen.getByAltText("Search");
    expect(searchImage).toBeInTheDocument();
    expect(searchImage).toHaveAttribute("src", "/assets/images/search.svg");

    const createLink = screen.getByText("Create New");
    expect(createLink).toBeInTheDocument();
    expect(createLink.closest("a")).toHaveAttribute("href", "/create");

    const messageIcon = screen.getByAltText("Message Chat Circle");
    expect(messageIcon).toBeInTheDocument();
    expect(messageIcon).toHaveAttribute(
      "src",
      "/assets/images/message-chat-circle.svg"
    );

    documents.forEach((document) => {
      expect(screen.getAllByText(document.title)[0]).toBeInTheDocument();
      expect(screen.getAllByText(document.description)[0]).toBeInTheDocument();
    });
  });

  it("checks Create New button click", () => {
    render(<Documents />);
    const createButton = screen.getByText("Create New");
    fireEvent.click(createButton);

    expect(createButton.closest("a")).toHaveAttribute("href", "/create");
  });
});
