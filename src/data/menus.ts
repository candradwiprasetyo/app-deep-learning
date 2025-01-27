import { MenuType } from "@/types";

export const menus: MenuType[] = [
  {
    id: 1,
    name: "Dashboard",
    url: "/",
    icon: "menu",
    isActive: true,
  },
  {
    id: 2,
    name: "Settings",
    url: "settings",
    icon: "settings",
    isActive: false,
  },
];
