import { useDispatch } from "react-redux";
import {
  useStudyPlanState,
  useStudyState,
} from "../../../../../../redux/store";
import { useEffect, useState } from "react";
import { PAGE, studyAction } from "../../../../../../redux/slice/study";
import {
  getSomeWordCount,
  getStudyWordPerStage,
  toCheckIn,
  toWord,
} from "../../../../../../redux/action/study";
import { Summary } from "./components/summary";
import { CheckIn } from "./components/checkIn";
import { STATUS } from "../../../../../../redux/slice/tag";
import { KnowWord } from "./components/knowWord";
import { SpellWord } from "./components/spellWord";
import { WordDetail } from "./components/wordDetail";

export const Study = () => {
  const {
    studyPlan: { todayNeedReviewWordCount, todayNeedStudyNewWordCount },
  } = useStudyPlanState();
  const dispatch = useDispatch();

  const {
    page,
    progress: { todayStudyedSuccessWordCount },
  } = useStudyState();

  useEffect(() => {
    dispatch(studyAction.toggleLoading());
    dispatch(studyAction.reset());
  }, []);

  useEffect(() => {
    console.log();
    if (
      todayStudyedSuccessWordCount ===
      todayNeedReviewWordCount + todayNeedStudyNewWordCount
    ) {
      toCheckIn(dispatch);
      return;
    }
    toWord(dispatch);
  }, [
    todayStudyedSuccessWordCount,
    todayNeedReviewWordCount,
    todayNeedStudyNewWordCount,
  ]);

  if (page === PAGE.word) {
    return <Word />;
  }
  if (page === PAGE.summary) {
    return <Summary />;
  }

  if (page === PAGE.checkIn) {
    return <CheckIn />;
  }
};

// 放到全局, 其他section ui 都可以使用
export enum Sections {
  WordDetail = "WordDetail",
  spellWord = "SpellWord",
  knowWord = "KnowWord",
}

const Word = () => {
  const [section, setSection] = useState<Sections>(Sections.knowWord);
  const dispatch = useDispatch();
  const { status } = useStudyState();
  console.log("word页面重渲染");

  useEffect(() => {
    dispatch(studyAction.toggleLoading());
    getSomeWordCount(dispatch);
    getStudyWordPerStage(dispatch);
  }, []);

  if (status === STATUS.pending) {
    return <div>数据加载中...</div>;
  }

  switch (section) {
    case Sections.knowWord:
      return <KnowWord setSection={setSection} />;
    case Sections.spellWord:
      return <SpellWord setSection={setSection} />;
    case Sections.WordDetail:
      return (
        <WordDetail
          // setIsShowWordDetail={setIsShowWordDetail}
          setSection={setSection}
        />
      );
    default:
      <div>错误!!</div>;
  }
};
