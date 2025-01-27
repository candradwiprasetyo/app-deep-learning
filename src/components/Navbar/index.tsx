import Image from "next/image";
import Link from "next/link";

type NavbarProps = {
  isShowBackButton?: boolean;
  isShowNavigation?: boolean;
  label?: string;
  title: string;
  navigationUrl?: string;
  backButtonOnClick?: () => void;
};

export default function Navbar({
  isShowBackButton,
  isShowNavigation,
  label = "",
  title,
  navigationUrl = "",
  backButtonOnClick,
}: NavbarProps) {
  return (
    <div
      className="bg-white py-7 px-6 text-sm border-b flex gap-2 items-center justify-between w-auto h-[76px]"
      data-testid="navbar"
    >
      <div className="flex items-center gap-2">
        {isShowNavigation && (
          <Link href={navigationUrl}>
            <Image
              src="/assets/images/chevron-left.svg"
              alt="Chevron Left"
              width={24}
              height={24}
            />
          </Link>
        )}
        <span>{title}</span>
        {label && (
          <span className="py-[2px] px-2 text-white text-xs bg-icon-secondary rounded">
            {label}
          </span>
        )}
      </div>
      {isShowBackButton && (
        <button
          type="button"
          onClick={backButtonOnClick}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          Back to form
        </button>
      )}
    </div>
  );
}
