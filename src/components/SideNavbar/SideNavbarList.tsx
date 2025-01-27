import { MenuType } from "@/types";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function SideNavbarList({
  id,
  name,
  url,
  icon,
  isActive,
}: MenuType) {
  return (
    <Link href={url} key={id}>
      <div
        className={clsx(
          "w-11 h-11 rounded-lg flex place-content-center",
          isActive && "bg-white"
        )}
        data-testid={`menu-${name}`}
      >
        <Image
          src={`/assets/images/${icon}.svg`}
          alt={name}
          width={20}
          height={20}
        />
      </div>
    </Link>
  );
}
