import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@/icons/home-icon.svg";
import AddIcon from "@/icons/add-icon.svg";
import ExploreIcon from "@/icons/explore-icon.svg";
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
        <HomeIcon />
      </Link>
      <button
        type="button"
        className="focus:outline-none hover:opacity-80 transition"
        aria-label="Create entry"
      >
        <AddIcon />
      </button>
      <button
        type="button"
        className="focus:outline-none hover:opacity-80 transition"
        aria-label="Explore"
      >
        <ExploreIcon />
      </button>
    </nav>
  );
};

export default BottomNavbar;
