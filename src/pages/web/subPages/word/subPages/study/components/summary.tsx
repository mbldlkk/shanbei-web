import { useEffect } from "react";
import { NextWordButton } from "./nextWordButton";
import { ProgressBar } from "./progressBar";
import { useStudyState } from "../../../../../../../redux/store";
import { useDispatch } from "react-redux";
import { SummaryWordItem } from "./summaryWordItem";
import {
  toWord,
  updateAfterStudy,
} from "../../../../../../../redux/action/study";
import { studyAction } from "../../../../../../../redux/slice/study";
import { STATUS } from "../../../../../../../redux/slice/tag";

export const Summary = () => {
  const { summaryWordData } = useStudyState();
  const dispatch = useDispatch();
  const {
    status,
    currentStudyMode,
    finishWord: { todayReviewWord, todayNewWord },
  } = useStudyState();

  //进入小结,立刻上传数据
  useEffect(() => {
    dispatch(studyAction.toggleLoading());
    if (currentStudyMode === 0) {
      updateAfterStudy(dispatch, { todayNewWord });
    } else {
      updateAfterStudy(dispatch, { todayReviewWord });
    }
  }, []);

  if (status === STATUS.pending) {
    return <div>数据上传中...</div>;
  }

  return (
    <div className="relative flex h-[580px] flex-col items-center justify-between gap-4 pb-1 pt-8">
      <div className="flex w-[60%] flex-col">
        <div className="relative">
          <div className="absolute left-[-50px] top-0">总结</div>快速回顾
        </div>
        {summaryWordData.map((i, index) => {
          return (
            <SummaryWordItem
              key={index}
              name={i.name}
              explainCN={i.explainCN}
              type={i.type}
              USAudio={i.USAudio}
              isKnow={i.isKnow}
            />
          );
        })}
      </div>
      <NextWordButton
        onclick={() => {
          if (status === STATUS.resolve) {
            dispatch(studyAction.reset());
            toWord(dispatch);
            console.log("当前状态是 666", status);
          }
        }}
        content={status === STATUS.resolve ? "下一轮单词" : "学习记录正在更新"}
      />
      <div className="relative flex w-[60%] justify-center">
        <div className="absolute left-[-50px] top-0">进度</div>
        <ProgressBar />
      </div>
    </div>
  );
};
