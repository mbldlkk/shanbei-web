import { useState } from "react";
import { IoStar } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

export const NotesItem = ({
  content,
  author,
}: {
  content: string;
  author: string;
}) => {
  const [isCollected, setIsCollected] = useState(false);

  return (
    <div className="flex min-h-[123px] w-full items-center justify-between border-b">
      <div className="ice justify flex h-40 w-[80%] flex-col justify-between py-4">
        <div className="h-">{content}</div>
        <div className="text-[#b0b4be]">作者: {author}</div>
      </div>
      <i
        className={twMerge(
          "cursor-pointer text-3xl",
          isCollected ? "text-[#ffdc21]" : "text-[#e1e2e6]",
        )}
        onClick={() => setIsCollected(!isCollected)}
      >
        <IoStar />
      </i>

      <button className="bg-[#f2f3f6] px-2 py-1 text-[#b0b4be]">举报</button>
    </div>
  );
};
