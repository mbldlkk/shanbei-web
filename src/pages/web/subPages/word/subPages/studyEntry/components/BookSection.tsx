import { Link } from "react-router-dom";
import {
  useStudyState,
  useUserBookState,
} from "../../../../../../../redux/store";
import { useDispatch } from "react-redux";
import { getSomeWordCount } from "../../../../../../../redux/action/study";
import { useEffect } from "react";
import { twMerge as tm } from "tailwind-merge";

export const BookSection = () => {
  const {
    defaultBook: { name, wordCount },
  } = useUserBookState();
  const {
    progress: { userBookLearnedWord },
  } = useStudyState();
  const dispatch = useDispatch();
  useEffect(() => {
    getSomeWordCount(dispatch);
  }, []);

  const today = new Date();
  today.setDate(today.getDate() + Math.ceil(wordCount / 10));

  return (
    <div className="flex w-[50%] gap-5 overflow-x-hidden sm:w-full">
      <img
        src=""
        alt={name}
        className="h-[200px] w-[140px] shrink-0 rounded-2xl bg-slate-200"
      />
      <div className="flex max-w-[360px] shrink-0 flex-col justify-evenly">
        <div>
          <span className="mr-4 text-2xl font-semibold">{name} </span>
          <Link to="/web/word/books">切换书籍</Link>
        </div>
        <div>
          <span className="mr-4 w-fit rounded-md bg-[#28bea0] px-2 py-[1px] text-white">
            预计完成时间
          </span>
          <span>
            {/* {today.toDateString()} */}
            {today.toLocaleDateString("zh-CN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="">
            已完成 {((userBookLearnedWord / wordCount) * 100).toFixed(0)} %
          </span>
          <span>
            {userBookLearnedWord}/{wordCount}词
          </span>
        </div>

        <div className="h-1 max-w-full rounded-xl bg-[#edeff3]">
          <div
            className={tm(
              "h-full rounded-xl bg-[#28bea0]",
              // "w-10",
              // `w-[${(7 / 246).toFixed(0)}px]`,
            )}
            style={{
              width: `${((userBookLearnedWord / wordCount) * 100).toFixed(0)}%`,
            }}
          ></div>
        </div>
      </div>
      <NavWordTable />
    </div>
  );
};

const NavWordTable = () => {
  return (
    <Link
      to="/web/word/table"
      className="absolute right-0 top-10 rounded-l-3xl bg-[#28bea0] px-6 py-1 text-white"
    >
      词表 &gt;
    </Link>
  );
};
