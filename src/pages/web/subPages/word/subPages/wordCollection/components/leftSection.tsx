import { useState } from "react";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";
import { twMerge as tm } from "tailwind-merge";
import { LeftButtonItem } from "./leftButtonItem";
import { useWordCollectionPageContext } from "../wordCollection";

export const LeftSection = () => {
  const [isShowSubButtonItem, setIsShowSubButtonItem] = useState<boolean>(true);

  const { selectIndex, setSelectIndex } = useWordCollectionPageContext();

  return (
    <div className="flex w-[167px] flex-col">
      <button
        className={tm("h-[90px] text-center")}
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
          <LeftButtonItem
            selectIndex={selectIndex}
            index="1"
            setSelectIndex={setSelectIndex}
          >
            今日添加
          </LeftButtonItem>
          <LeftButtonItem
            selectIndex={selectIndex}
            index="2"
            setSelectIndex={setSelectIndex}
          >
            今日复习
          </LeftButtonItem>
        </>
      )}

      <LeftButtonItem
        selectIndex={selectIndex}
        index="3"
        setSelectIndex={setSelectIndex}
      >
        在学单词
      </LeftButtonItem>
      <LeftButtonItem
        selectIndex={selectIndex}
        index="4"
        setSelectIndex={setSelectIndex}
      >
        未学单词
      </LeftButtonItem>
      <LeftButtonItem
        selectIndex={selectIndex}
        index="5"
        setSelectIndex={setSelectIndex}
      >
        简单词
      </LeftButtonItem>
    </div>
  );
};
