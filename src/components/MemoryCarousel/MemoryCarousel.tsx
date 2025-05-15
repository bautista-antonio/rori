import { MemoryCardProps } from "@/types/memory";
import { JSX } from "react";
import MemoryCard from "../MemoryCard/MemoryCard";
/**
 * Carousel component for displaying memories
 */
const MemoryCarousel = ({
  memories,
}: {
  memories: MemoryCardProps[];
}): JSX.Element => {
  return (
    <section className="flex flex-col gap-4 items-center my-8 w-full overflow-hidden">
      <h3 className="font-medium">
        Recent memories (
        <span className="text-medium-gray">{memories.length}</span>)
      </h3>
      {/* v Carousel container */}
      <div className="flex gap-6 overflow-x-auto max-w-full px-16 snap-x snap-mandatory scroll-smooth scrollbar-hidden">
        {memories.map((memory, idx) => (
          <MemoryCard key={idx} {...memory} />
        ))}
      </div>
    </section>
  );
};

export default MemoryCarousel;
