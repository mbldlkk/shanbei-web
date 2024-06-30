import { FamousQuotes } from "../../../../../../shareComponent/famousQuotes";
import { Link } from "react-router-dom";
import {
  AppDispatch,
  useCheckInState,
  useUserBookState,
} from "../../../../../../redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCheckInTimes } from "../../../../../../redux/slice/checkin";
import { BookSection } from "./components/BookSection";
import { TodayTask } from "./components/todayTask";
import { NoBook } from "../wordTable/components/noBook";
import { STATUS } from "../../../../../../redux/slice/tag";

export const StudyEntry = () => {
  const { defaultBook, status } = useUserBookState();
  const { checkInTimes } = useCheckInState();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCheckInTimes());
  }, []);

  //如果用户书籍尚未获取成功
  if (status === STATUS.pending) {
    return <div className="">用户数据加载中</div>;
  }
  if (defaultBook.name === "") {
    return <NoBook />;
  }

  return (
    <div className="w-full px-20 pt-5 sm:px-1">
      <div className="mb-5 text-xl font-semibold">
        我在扇贝单词学习&nbsp;
        <span className="text-5xl">{checkInTimes}</span>
        &nbsp;天
      </div>

      <Main />
      <div className="mx-auto my-10 max-w-[300px] rounded-3xl bg-[#32c5a4] px-5 py-2 text-center">
        <Link to="/web/word/study?type=book">开始学习</Link>
      </div>
      <FamousQuotes tmStyle="border-t-2 border-t-red" />
    </div>
  );
};

const Main = () => {
  return (
    <div className="s1m:flex-col m1d:flex-col relative flex flex-wrap items-center justify-evenly gap-20 rounded-2xl border border-red-400 bg-[#fafafa] px-8 py-10 shadow-xl sm:justify-between md:justify-between lg:flex-row">
      <BookSection />
      <TodayTask />
    </div>
  );
};
