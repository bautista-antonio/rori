import Link from "next/link";
import { Home, Plus, Search } from "lucide-react";

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-charcoal rounded-full px-6 py-3 gap-6 flex items-center justify-between shadow-lg z-50">
      <Link href="/" className="focus:outline-none hover:opacity-80 transition">
        <Home className="w-6 h-6 text-ivory" />
      </Link>
      <button className="focus:outline-none hover:opacity-80 transition">
        <Plus className="w-6 h-6 text-ivory" />
      </button>
      <button className="focus:outline-none hover:opacity-80 transition">
        <Search className="w-6 h-6 text-ivory" />
      </button>
    </nav>
  );
};

export default BottomNavbar;
