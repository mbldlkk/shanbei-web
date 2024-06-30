import { useEffect } from "react";
import { useWordState } from "../../../../../../../redux/store";
import { useDispatch } from "react-redux";
import { Pagination } from "./pagination";
import { TableDataItem } from "./tableDataItem";
import {
  getSimpleWord,
  getSimpleWordCount,
} from "../../../../../../../redux/action/word";

export const SimpleWord = () => {
  const { simpleWord, simpleWordCount } = useWordState();
  const dispatch = useDispatch();

  useEffect(() => {
    getSimpleWord(dispatch, 1);
    getSimpleWordCount(dispatch);
  }, []);

  if (simpleWordCount === 0) {
    return (
      <p className="content-center self-center text-2xl font-semibold">
        暂时没有简单词
      </p>
    );
  }

  return (
    <>
      <p className="self-end">简单词共{simpleWordCount}词</p>

      <div
        //
        className="grid min-h-[500px] grid-cols-2 content-start gap-x-[224px] py-5"
      >
        {simpleWord.length > 0
          ? simpleWord.map((item) => {
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
      <Pagination page={Math.ceil(simpleWordCount / 10)} />
    </>
  );
};
