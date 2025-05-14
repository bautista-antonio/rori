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
    <section className="flex flex-col items-center justify-center my-8">
      <h3>Recent memories ({memories.length})</h3>
      {/* v Carousel container */}
      <div className="flex gap-6 overflow-x-scroll">
        {memories.map((memory, idx) => (
          <MemoryCard key={idx} {...memory} />
        ))}
      </div>
    </section>
  );
};

export default MemoryCarousel;
