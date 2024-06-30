import {
  useStudyPlanState,
  useStudyState,
} from "../../../../../../../redux/store";

export const TodayTask = () => {
  const { studyPlan } = useStudyPlanState();
  const {
    progress: { todayStudyedSuccessWordCount, todayStudyedFailueWordCount },
  } = useStudyState();
  const a = studyPlan.todayNeedStudyNewWordCount;
  const b = studyPlan.todayNeedReviewWordCount;
  const c = todayStudyedSuccessWordCount + todayStudyedFailueWordCount;
  const d = a + b - c;
  return (
    <div className="shrink1-0 w-[40%] sm:w-full">
      <h3 className="text-center text-[#9999b3]">-今日任务-</h3>

      <div
        className="ga1p-28 mt-5 flex justify-between gap-1"
        //gap-28 转为最小间隔+ between
      >
        {[
          { count: a, content: "新词数" },
          { count: b, content: "复习单词" },
          { count: d, content: "未学单词" },
        ].map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-4xl font-semibold">{item.count}</h3>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
