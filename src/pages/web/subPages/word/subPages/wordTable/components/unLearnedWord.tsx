import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useWordState } from "../../../../../../../redux/store";
import { TableDataItem } from "./tableDataItem";
import { Pagination } from "./pagination";
import {
  getUnLearnedWord,
  getUnLearnedWordCount,
} from "../../../../../../../redux/action/word";

export const UnLearnedWord = () => {
  const { unLearnedWord, unLearnedWordCount } = useWordState();
  const dispatch = useDispatch();

  useEffect(() => {
    getUnLearnedWord(dispatch, 1);
    getUnLearnedWordCount(dispatch);
  }, []);

  if (unLearnedWordCount === 0) {
    return (
      <p className="content-center self-center text-2xl font-semibold">
        所有单词都已经学习
      </p>
    );
  }

  return (
    <>
      <p className="self-end">未学单词共{unLearnedWordCount}词</p>

      <div
        //
        className="gap-sy-3 grid min-h-[500px] grid-cols-2 content-start gap-x-[224px] py-5"
      >
        {unLearnedWord.length > 0
          ? unLearnedWord.map((item) => {
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
          : ""}
      </div>
      <Pagination page={Math.ceil(unLearnedWordCount / 10)} />
    </>
  );
};
