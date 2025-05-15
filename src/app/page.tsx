import ActionBar from "@/components/ActionBar/ActionBar";
import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import MemoryCarousel from "@/components/MemoryCarousel/MemoryCarousel";
import WelcomingHeader from "@/components/WelcomingHeader/WelcomingHeader";

const sampleMemories = [
  {
    id: "1",
    title: "December tasted like this",
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "That pho place on 3rd. street",
    createdAt: new Date(),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <ActionBar />
      <WelcomingHeader name="Alice" />
      <MemoryCarousel memories={sampleMemories} />
      <BottomNavbar />
    </div>
  );
}
