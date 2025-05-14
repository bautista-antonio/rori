import Image from "next/image";
import { FC } from "react";
import { MemoryCardProps } from "@/types/memory";
import arrowIconUrl from "@/icons/view-memory-arrow.svg";

/**
 * Card component that displays a memory.
 */

const MemoryCard: FC<MemoryCardProps> = ({ title, createdAt }) => {
  return (
    /* v Card shape */
    <div className="flex flex-col w-64 bg-earthy-brown text-ivory rounded-lg shadow-md px-6 pb-8">
      {/* v Punch wholes decoration*/}
      <div className="flex justify-between">
        <div className="w-4 h-4 bg-ivory rounded-full"></div>
        <div className="w-4 h-4 bg-ivory rounded-full"></div>
        <div className="w-4 h-4 bg-ivory rounded-full"></div>
        <div className="w-4 h-4 bg-ivory rounded-full"></div>
        <div className="w-4 h-4 bg-ivory rounded-full"></div>
        <div className="w-4 h-4 bg-ivory rounded-full"></div>
        <div className="w-4 h-4 bg-ivory rounded-full"></div>
      </div>
      {/* v Card header */}
      <div className="flex flex-col items-between">
        <h2 className="text-lg font-bold underline underline-offset-4">
          {title}
        </h2>
        <p className="text-sm">
          {new Date(createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <button className="flex items-center justify-between">
        <p>View Memory</p>
        <Image src={arrowIconUrl} alt=""></Image>
      </button>
    </div>
  );
};
export default MemoryCard;
