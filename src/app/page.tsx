import ActionBar from "@/components/ActionBar/ActionBar";
import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import WelcomingHeader from "@/components/WelcomingHeader/WelcomingHeader";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <ActionBar />
      <WelcomingHeader name="Alice" />
      <BottomNavbar />
    </div>
  );
}
