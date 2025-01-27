import { render, screen } from "@testing-library/react";
import SideNavbar from "../index";
import { menus } from "@/data/menus";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, src }: { alt: string; src: string }) => (
    <img alt={alt} src={src} />
  ),
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => <a href={href}>{children}</a>,
}));

describe("SideNavbar", () => {
  test("renders the logo and links to the homepage", () => {
    render(<SideNavbar />);

    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
    const logoLink = logo.closest("a");
    expect(logoLink).toHaveAttribute("href", "/");
  });

  test("renders the menu items from the menus data", () => {
    render(<SideNavbar />);
    menus.forEach((menu) => {
      const menuIcon = screen.getByAltText(menu.name);
      expect(menuIcon).toBeInTheDocument();
      const menuLink = menuIcon.closest("a");
      expect(menuLink).toHaveAttribute("href", menu.url);
    });
  });

  test("renders active class for active menu item", () => {
    render(<SideNavbar />);
    const activeMenu = menus.find((menu) => menu.isActive);

    if (activeMenu) {
      const activeMenuIcon = screen.getByAltText(activeMenu.name);

      expect(activeMenuIcon).toBeInTheDocument();
      const activeMenuParent = activeMenuIcon.closest("div");
      expect(activeMenuParent).toHaveClass("bg-white");
    }
  });

  test("renders the correct number of menu items", () => {
    render(<SideNavbar />);
    const menuItems = screen.getAllByRole("link");
    expect(menuItems).toHaveLength(menus.length + 1);
  });
});
