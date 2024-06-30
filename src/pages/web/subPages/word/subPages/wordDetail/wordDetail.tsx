import { useEffect } from "react";
import { useWordState } from "../../../../../../redux/store";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { studyAction } from "../../../../../../redux/slice/study";
import { getWordByName } from "../../../../../../redux/action/word";
import { STATUS } from "../../../../../../redux/slice/tag";
import { WordDetailSection } from "../study/components/wordDetailSection";

export const WordDetail = () => {
  const { searchWord, status } = useWordState();
  const params = useParams();
  const dispatch = useDispatch();
  // const { currentStudyWord } = useStudyState();
  console.log(params);
  useEffect(() => {
    const isSameWord = searchWord.name === params.wordName;
    if (isSameWord) {
      //复用搜索单词
      dispatch(studyAction.setCurrentWithSearchWord(searchWord));
    } else {
      //否则的话就去请求该单词
      getWordByName(dispatch, params.wordName as string);
    }
  }, [searchWord]);

  if (status === STATUS.pending) {
    return <>正在搜索单词中...</>;
  }

  return <WordDetailSection />;
};
