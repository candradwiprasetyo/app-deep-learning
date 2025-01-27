import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../index";
import "@testing-library/jest-dom";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, src, width, height }: any) => (
    <img alt={alt} src={src} width={width} height={height} />
  ),
}));

describe("Navbar", () => {
  it("renders the component with title and label", () => {
    render(<Navbar title="Page Title" label="New" />);
    expect(screen.getByText("Page Title")).toBeInTheDocument();
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("renders the navigation icon if isShowNavigation is true", () => {
    render(
      <Navbar
        title="Page Title"
        isShowNavigation={true}
        navigationUrl="/home"
      />
    );
    expect(screen.getByAltText("Chevron Left")).toBeInTheDocument();
  });

  it("does not render the navigation icon if isShowNavigation is false", () => {
    render(<Navbar title="Page Title" isShowNavigation={false} />);
    expect(screen.queryByAltText("Chevron Left")).not.toBeInTheDocument();
  });

  it("renders the back button if isShowBackButton is true", () => {
    const mockBackButtonClick = jest.fn();
    render(
      <Navbar
        title="Page Title"
        isShowBackButton={true}
        backButtonOnClick={mockBackButtonClick}
      />
    );

    const backButton = screen.getByText("Back to form");
    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton);
    expect(mockBackButtonClick).toHaveBeenCalledTimes(1);
  });

  it("does not render the back button if isShowBackButton is false", () => {
    render(<Navbar title="Page Title" isShowBackButton={false} />);
    expect(screen.queryByText("Back to form")).not.toBeInTheDocument();
  });
});
