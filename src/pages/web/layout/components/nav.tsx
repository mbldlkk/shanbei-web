import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import { twMerge as tm } from "tailwind-merge";

import { TopLeft } from "./topLeft";
import { TopRight } from "./topRight";

export const Nav = () => {
  // console.log("nav");
  const [isShowLeft, setIsShowLeft] = useState(false);

  return (
    <>
      <div
        className={tm(
          "sm: absolute right-0 top-0 z-10 h-full w-full bg-black opacity-50",
          isShowLeft ? "block" : "hidden",
        )}
        onClick={() => setIsShowLeft(false)}
      ></div>
      <button
        onClick={() => {
          setIsShowLeft(true);
        }}
        className="hidden sm:block"
      >
        <i className="text-3xl">
          <IoMenuOutline />
        </i>
      </button>
      <nav
        className={tm(
          "gap1-2 sm1:w-[80%] sm:flex1-row w1-[70%] min-w1-fit mx-auto flex max-w-[1250px] flex-row items-center justify-between transition-transform",
          "p-1 sm:absolute sm:left-0 sm:top-0 sm:z-[11] sm:min-h-[100vh] sm:w-[70%] sm:flex-col sm:justify-start sm:gap-20 sm:bg-[#209e85] sm:pt-[20%] md:flex-col lg:h-6",
          isShowLeft ? "sm:translate-x-0" : "sm:-translate-x-full",
        )}
      >
        <TopLeft />
        <TopRight />
      </nav>
    </>
  );
};
