import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNoteState, useStudyState } from "../../../../../../../redux/store";
import { IoCreateOutline } from "react-icons/io5";
import { createNoteByWordId } from "../../../../../../../redux/action/note";

export const CreateNote = () => {
  const [count, setCount] = useState(0);
  const {
    currentStudyWord: { id },
  } = useStudyState();

  const { myNote } = useNoteState();
  const inputRef = useRef<any>();
  const timeId = useRef<any>(); // 计时器id, 防抖统计
  const dispatch = useDispatch();

  if (myNote.content !== "") {
    return <> 一个单词只能创建一条笔记,当前单词已经创建笔记</>;
  }

  return (
    <>
      <div className="relative rounded-md border bg-[#f7f8fa] px-3 py-2 pb-10">
        <textarea
          name=""
          id=""
          ref={inputRef}
          cols={80}
          rows={10}
          autoFocus
          maxLength={800}
          onChange={() => {
            clearTimeout(timeId.current);
            timeId.current = setTimeout(() => {
              console.log(inputRef.current.value);
              setCount(inputRef.current.value.length);
            }, 600);
          }}
          className="relative block w-full resize-none bg-[#f7f8fa] outline-none"
          placeholder="在这里创建自己的笔记哦~ (* 一个单词只能创建一条笔记)"
        ></textarea>

        <div className="absolute bottom-2 right-6 block">({count}/800)字</div>
      </div>
      <button
        className="ml-1 flex items-center rounded bg-[#28bea0] px-10 py-[1px] text-white"
        onClick={() => createNoteByWordId(dispatch, id, inputRef.current.value)}
      >
        <i className="mr-1 inline-block text-2xl">
          <IoCreateOutline />
        </i>
        创建
      </button>
    </>
  );
};
