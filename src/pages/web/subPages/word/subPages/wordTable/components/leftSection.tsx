import { useState } from "react";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";
import { LeftButtonItem } from "./leftButtonItem";

import { twMerge as tm } from "tailwind-merge";

export const LeftSection = () => {
  const [isShowSubButtonItem, setIsShowSubButtonItem] = useState<boolean>(true);

  return (
    <div className="sticky1 top1-0 flex w-[167px] flex-col overflow-auto border-r sm:w-full sm:flex-row sm:gap-3 sm:border-b sm:border-r-0 sm:pb-2">
      <button
        className={tm("h-[90px] shrink-0 text-center sm:hidden")}
        onClick={() => {
          setIsShowSubButtonItem(!isShowSubButtonItem);
        }}
      >
        <p className="mr-3 inline-block">今日任务</p>
        <i className="inline-block">
          {isShowSubButtonItem ? <IoCaretDownOutline /> : <IoCaretUpOutline />}
        </i>
      </button>
      {isShowSubButtonItem && (
        <>
          <LeftButtonItem section="todayNewWord">今日新词</LeftButtonItem>
          <LeftButtonItem section="todayReviewWord">今日复习</LeftButtonItem>
        </>
      )}

      <LeftButtonItem section="learningWord">在学单词</LeftButtonItem>
      <LeftButtonItem section="unLearnedWord">未学单词</LeftButtonItem>
      <LeftButtonItem section="simpleWord">简单词</LeftButtonItem>
    </div>
  );
};
