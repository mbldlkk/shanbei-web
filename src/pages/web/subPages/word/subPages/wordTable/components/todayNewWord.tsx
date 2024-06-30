import { useDispatch } from "react-redux";
import {
  useStudyPlanState,
  useWordState,
} from "../../../../../../../redux/store";
import { useEffect } from "react";
import { TableDataItem } from "./tableDataItem";
import { Pagination } from "./pagination";
import { getTodayNewWord } from "../../../../../../../redux/action/word";

//判断count 为0 的情况, 如果为0,则 分页组件, 等等都不展示, 而是使用 空白页面 展示.
export const TodayNewWord = () => {
  const {
    studyPlan: { todayNeedStudyNewWordCount },
  } = useStudyPlanState();
  const { todayNewWord } = useWordState();
  const dispatch = useDispatch();

  useEffect(() => {
    //默认加载今日的新词的第一页
    getTodayNewWord(dispatch, 1);
  }, []);

  if (todayNeedStudyNewWordCount === 0) {
    return (
      <p className="content-center self-center text-2xl font-semibold">
        今日没有需要学习的新词
      </p>
    );
  }

  return (
    <>
      <p className="self-end">今日新词共{todayNeedStudyNewWordCount}词</p>

      <div
        //
        className="grid min-h-[500px] grid-cols-2 content-start justify-center gap-x-[224px] overflow-y-auto overscroll-y-contain py-5 pr-2 sm:h-[400px] sm:grid-cols-1 sm:gap-x-2 md:gap-x-10"
      >
        {
          //需要判断单词数据数量. 大于0再
          todayNewWord.length > 0
            ? todayNewWord.map((item) => {
                return (
                  <TableDataItem
                    name={item.name}
                    definition={item.explainCN}
                    type={item.type}
                    url={"tofu.mp3"}
                    key={item.id}
                  />
                );
              })
            : ""
        }
      </div>
      <Pagination page={Math.ceil(todayNeedStudyNewWordCount / 10)} />
    </>
  );
};
