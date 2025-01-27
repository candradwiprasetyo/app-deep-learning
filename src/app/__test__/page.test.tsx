import { render, screen } from "@testing-library/react";
import Homepage from "@/app/page";
import { jest } from "@jest/globals";

jest.mock("@/components/SideNavbar", () => () => (
  <div data-testid="side-navbar">SideNavbar</div>
));
jest.mock("@/components/Documents", () => () => (
  <div data-testid="documents">Documents</div>
));
jest.mock("@/components/Navbar", () => {
  return jest.fn(({ title }: { title: string }) => (
    <div data-testid="navbar">{title}</div>
  ));
});
jest.mock("@/components/CreateReport", () => () => (
  <div data-testid="create-report">CreateReport</div>
));

describe("CreateDocument", () => {
  it("renders all child components correctly", () => {
    render(<Homepage />);
    expect(screen.getByTestId("side-navbar")).toBeInTheDocument();
    expect(screen.getByTestId("documents")).toBeInTheDocument();

    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
    expect(navbar).toHaveTextContent("Report Helper");
    expect(screen.getByTestId("create-report")).toBeInTheDocument();
  });

  it("renders the layout correctly", () => {
    render(<Homepage />);

    const sideNavbar = screen.getByTestId("side-navbar");
    const documents = screen.getByTestId("documents");
    const navbar = screen.getByTestId("navbar");
    const createReport = screen.getByTestId("create-report");

    expect(sideNavbar).toBeInTheDocument();
    expect(documents).toBeInTheDocument();
    expect(navbar).toBeInTheDocument();
    expect(createReport).toBeInTheDocument();
  });
});
