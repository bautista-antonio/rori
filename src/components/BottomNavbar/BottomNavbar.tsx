import Link from "next/link";
import Image from "next/image";
import homeUrl from "@/icons/home-icon.svg?url";
import addUrl from "@/icons/add-icon.svg?url";
import exploreUrl from "@/icons/explore-icon.svg";

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-charcoal rounded-full px-6 py-3 gap-6 flex items-center justify-between shadow-lg z-50">
      <Link href="/" className="focus:outline-none hover:opacity-80 transition">
        <Image src={homeUrl} className="w-6 h-6 text-ivory" alt="" />
      </Link>
      <button className="focus:outline-none hover:opacity-80 transition">
        <Image src={addUrl} className="w-6 h-6 text-ivory" alt="" />
      </button>
      <button className="focus:outline-none hover:opacity-80 transition">
        <Image src={exploreUrl} className="w-6 h-6 text-ivory" alt="" />
      </button>
    </nav>
  );
};

export default BottomNavbar;
