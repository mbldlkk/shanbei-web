import { useState } from "react";
import { useNoteState } from "../../../../../../../redux/store";
import { NotesItem } from "./notesItem";
import { IoChevronDownOutline } from "react-icons/io5";
import { STATUS } from "../../../../../../../redux/slice/tag";
import { twMerge } from "tailwind-merge";

export const GoodNotes = () => {
  const [isShowDetail, setIsShowDetail] = useState(false);
  const { status, note } = useNoteState();

  if (status === STATUS.pending) {
    return <div>单词笔记加载中...</div>;
  }

  if (note.length === 0) {
    return <div>当前单词还没有笔记</div>;
  }

  return (
    <>
      {note.map((i) => {
        return <NotesItem content={i.content} author="测试用户名" key={i.id} />;
      })}

      <button
        onClick={() => setIsShowDetail(!isShowDetail)}
        className="flex gap-1 self-center text-[#b0b4be]"
      >
        <i className={twMerge("text-2xl", isShowDetail ? "rotate-180" : "")}>
          <IoChevronDownOutline />
        </i>
        <span className="">{isShowDetail ? "收起" : "展开"}</span>
      </button>
    </>
  );
};
