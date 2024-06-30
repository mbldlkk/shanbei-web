import { Link } from "react-router-dom";
import {
  useStudyState,
  useUserBookState,
} from "../../../../../../../redux/store";

export const LearningBookSection = () => {
  const {
    defaultBook: { name, wordCount },
  } = useUserBookState();
  const {
    progress: { userBookLearnedWord },
  } = useStudyState();

  const today = new Date();
  today.setDate(today.getDate() + Math.ceil(wordCount / 10));

  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">正在学习的单词书</h3>
        <Link
          className="rounded-xl border border-[#28bea0] bg-[#28bea0] px-4 py-1 text-white"
          to="/web/word/table"
        >
          词表 &gt;
        </Link>
      </div>

      <div
        //学习中模块 content
        className="flex flex-row gap-10 rounded-xl bg-[#fafafa] px-6 py-4"
      >
        <img
          src=""
          alt={name}
          className="h-[200px] w-[140px] rounded-xl bg-blue-300"
        />
        <div
          // 书籍图片后详细内容
          className="flex w-[80%] flex-col justify-evenly gap-1"
        >
          <div className="flex w-[100%] justify-between">
            <p className="text-xl font-semibold">{name}</p>
            <p>设置任务量</p>
          </div>
          <div>
            <span className="mr-4 rounded-md bg-[#28bea0] px-2 py-[1px] text-white">
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
          <p>
            已完成: {userBookLearnedWord}/{wordCount}词
          </p>
        </div>
      </div>
    </>
  );
};
