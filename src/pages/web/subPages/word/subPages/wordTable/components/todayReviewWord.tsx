import { useDispatch } from "react-redux";
import {
  useStudyPlanState,
  useWordState,
} from "../../../../../../../redux/store";
import { useEffect } from "react";
import { getTodayReviewWord } from "../../../../../../../redux/action/word";
import { TableDataItem } from "./tableDataItem";
import { Pagination } from "./pagination";

export const TodayReviewWord = () => {
  const {
    studyPlan: { todayNeedReviewWordCount },
  } = useStudyPlanState();
  const { todayReviewWord } = useWordState();
  const dispatch = useDispatch();
  useEffect(() => {
    getTodayReviewWord(dispatch, 1);
  }, []);

  if (todayNeedReviewWordCount === 0) {
    return (
      <p className="content-center self-center text-2xl font-semibold">
        今日没有需要复习的单词
      </p>
    );
  }

  return (
    <>
      <p className="self-end">今日需要复习{todayNeedReviewWordCount}词</p>

      <div
        //
        className="grid min-h-[500px] grid-cols-2 content-start justify-center gap-x-[224px] py-5"
      >
        {todayReviewWord.length > 0
          ? todayReviewWord.map((item) => {
              return (
                <TableDataItem
                  name={item.word.name}
                  definition={item.word.explainCN}
                  type={item.word.type}
                  url={"tofu.mp3"}
                  key={item.word.id}
                />
              );
            })
          : ""}
      </div>
      <Pagination page={Math.ceil(todayNeedReviewWordCount / 10)} />
    </>
  );
};
