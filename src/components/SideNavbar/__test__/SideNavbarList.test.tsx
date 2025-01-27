import { render, screen } from "@testing-library/react";
import SideNavbarList from "../SideNavbarList";
import { MenuType } from "@/types";

const mockProps: MenuType = {
  id: 1,
  name: "Dashboard",
  url: "/dashboard",
  icon: "dashboard-icon",
  isActive: true,
};

describe("SideNavbarList", () => {
  it("renders the component correctly", () => {
    render(<SideNavbarList {...mockProps} />);
    const menuItem = screen.getByTestId(`menu-${mockProps.name}`);
    expect(menuItem).toBeInTheDocument();
    expect(menuItem).toHaveClass("bg-white");
    const image = screen.getByAltText(mockProps.name);
    expect(image).toHaveAttribute(
      "src",
      `/assets/images/${mockProps.icon}.svg`
    );
  });

  it("applies the correct styles when not active", () => {
    const inactiveProps = { ...mockProps, isActive: false };
    render(<SideNavbarList {...inactiveProps} />);
    const menuItem = screen.getByTestId(`menu-${inactiveProps.name}`);
    expect(menuItem).not.toHaveClass("bg-white");
  });
});
