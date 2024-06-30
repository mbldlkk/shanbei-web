import {
  useStudyPlanState,
  useStudyState,
} from "../../../../../../../redux/store";

export const ProgressBar = () => {
  const {
    studyPlan: { todayNeedStudyNewWordCount, todayNeedReviewWordCount },
  } = useStudyPlanState();
  const {
    progress: { todayStudyedSuccessWordCount, todayStudyedFailueWordCount },
  } = useStudyState();
  const a = todayNeedStudyNewWordCount + todayNeedReviewWordCount; //今日的任务量
  const b = todayStudyedSuccessWordCount + todayStudyedFailueWordCount; //今日 目前实现的任务量
  const d = a - b; //今日未实现的任务量
  const todaySuccessRate = todayStudyedSuccessWordCount / a;
  const todayFailureRate = todayStudyedFailueWordCount / a;
  const todayUnstudyedRate = d / a; //未学习是否服务端实现? 如果实际需要今天复习的单词远大于任务量就不好计算了.

  return (
    <div className="w-[700px] border bg-[#f5f5f5]">
      <span
        className={`// inline-block min-w-fit text-center w-[${todaySuccessRate * 100}%] bg-[#209e85] text-white`}
        style={{ width: `${todaySuccessRate * 100}%` }}
      >
        {todayStudyedSuccessWordCount > 0 ? todayStudyedSuccessWordCount : null}
      </span>
      <span
        className={`// inline-block min-w-fit text-center w-[${todayUnstudyedRate * 100}%]`}
        style={{ width: `${todayUnstudyedRate * 100}%` }}
      >
        {d > 0 ? d : null}
      </span>
      <span
        className={`// inline-block min-w-fit text-center w-[${todayFailureRate * 100}%] bg-[#f89406] text-white`}
        style={{ width: `${todayFailureRate * 100}%` }}
      >
        {todayStudyedFailueWordCount > 0 ? todayStudyedFailueWordCount : null}
      </span>
    </div>
  );
};
