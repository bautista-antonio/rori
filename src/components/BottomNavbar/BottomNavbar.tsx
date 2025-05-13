import Link from "next/link";
import Image from "next/image";
import homeIconUrl from "@/icons/home-icon.svg?url";
import addIconUrl from "@/icons/add-icon.svg?url";
import exploreIconUrl from "@/icons/explore-icon.svg?url";
import { FC } from "react";

/**
 * A bottom navigation bar component.
 */

const BottomNavbar: FC = () => {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-charcoal rounded-full px-6 py-3 gap-6 flex items-center justify-between shadow-lg z-50">
      <Link
        href="/"
        className="focus:outline-none hover:opacity-80 transition"
        aria-label="Home"
      >
        <Image src={homeIconUrl} className="text-ivory" alt="" />
      </Link>
      <button
        type="button"
        className="focus:outline-none hover:opacity-80 transition"
        aria-label="Create entry"
      >
        <Image src={addIconUrl} className="text-ivory" alt="" />
      </button>
      <button
        type="button"
        className="focus:outline-none hover:opacity-80 transition"
        aria-label="Explore"
      >
        <Image src={exploreIconUrl} className="text-ivory" alt="" />
      </button>
    </nav>
  );
};

export default BottomNavbar;
