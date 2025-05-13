import ActionBar from "@/components/ActionBar/ActionBar";
import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <ActionBar />
      <h1 className="text-3xl sm:text-5xl font-bold">Sup, nerds!</h1>
      <BottomNavbar />
    </div>
  );
}
