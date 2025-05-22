import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { MemoryCardProps } from "@/types/memory";
import ArrowIcon from "@/icons/view-memory-arrow.svg";

/**
 * Card component that displays a memory.
 */

const MemoryCard: FC<MemoryCardProps> = ({ id, title, createdAt }) => {
  return (
    <Link href={`/memories/${id}`} className="flex justify-center">
      {/* v Card shape */}
      <div className="min-h-[344px] w-64 bg-earthy-brown text-ivory rounded-b-2xl shadow-md px-6 pb-8 shrink-0">
        {/* v Punch wholes decoration*/}
        <div className="flex justify-between my-4">
          <div className="w-4 h-4 bg-ivory rounded-full"></div>
          <div className="w-4 h-4 bg-ivory rounded-full"></div>
          <div className="w-4 h-4 bg-ivory rounded-full"></div>
          <div className="w-4 h-4 bg-ivory rounded-full"></div>
          <div className="w-4 h-4 bg-ivory rounded-full"></div>
          <div className="w-4 h-4 bg-ivory rounded-full"></div>
          <div className="w-4 h-4 bg-ivory rounded-full"></div>
        </div>
        {/* v Card content */}
        <div className="h-full max-h-66 flex flex-col justify-between">
          {/* v Card header */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-lg font-semibold underline underline-offset-4 decoration-2">
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
          <button className="flex items-center gap-2">
            <p className="text-base">View Memory</p>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </Link>
  );
};
export default MemoryCard;
