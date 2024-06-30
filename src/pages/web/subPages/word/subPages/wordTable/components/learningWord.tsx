import { useDispatch } from "react-redux";
import { useWordState } from "../../../../../../../redux/store";
import { useEffect } from "react";
import { TableDataItem } from "./tableDataItem";
import { Pagination } from "./pagination";
import {
  getLearningWord,
  getLearningWordCount,
} from "../../../../../../../redux/action/word";

export const LearningWord = () => {
  const { learningWord, learningWordCount } = useWordState();
  const dispatch = useDispatch();

  useEffect(() => {
    getLearningWord(dispatch, 1);
    getLearningWordCount(dispatch);
  }, []);

  if (learningWordCount === 0) {
    return (
      <p className="content-center self-center text-2xl font-semibold">
        暂时没有在学习的单词
      </p>
    );
  }

  return (
    <>
      <p className="self-end">在学单词共{learningWordCount}词</p>

      <div
        //
        className="grid min-h-[500px] grid-cols-2 content-start justify-start gap-x-[224px] py-5"
      >
        {learningWord.length > 0
          ? learningWord.map((item) => {
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
      <Pagination page={Math.ceil(learningWordCount / 10)} />
    </>
  );
};
