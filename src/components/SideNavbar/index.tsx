import Image from "next/image";
import Link from "next/link";
import { menus } from "@/data/menus";
import SideNavbarList from "./SideNavbarList";

export default function SideNavbar() {
  return (
    <div className="w-[68px] bg-secondary p-3 h-full fixed">
      <Link href="/">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={44}
          height={44}
          priority
        />
      </Link>
      <div className="mt-8">
        {menus.map((menu) => (
          <SideNavbarList
            key={menu.id}
            id={menu.id}
            name={menu.name}
            url={menu.url}
            icon={menu.icon}
            isActive={menu.isActive}
          />
        ))}
      </div>
    </div>
  );
}
