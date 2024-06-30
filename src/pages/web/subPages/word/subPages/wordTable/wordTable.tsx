import { ReactNode, useContext, useState } from "react";

import { createContext } from "react";

import { useUserBookState } from "../../../../../../redux/store";
import { LeftSection } from "./components/leftSection";
import { TodayNewWord } from "./components/todayNewWord";
import { TodayReviewWord } from "./components/todayReviewWord";
import { LearningWord } from "./components/learningWord";
import { UnLearnedWord } from "./components/unLearnedWord";
import { SimpleWord } from "./components/simpleWord";
import { NoBook } from "./components/noBook";

let init: any;

type wordCollectionContext = {
  selectSection:
    | "todayNewWord"
    | "learningWord"
    | "unLearnedWord"
    | "simpleWord"
    | "todayReviewWord";
  setSelectSection: React.Dispatch<
    React.SetStateAction<
      | "todayNewWord"
      | "learningWord"
      | "unLearnedWord"
      | "simpleWord"
      | "todayReviewWord"
    >
  >;
};

const WordCollectionPage = createContext<wordCollectionContext>(init);

const WordCollectionPageContext = ({ children }: { children: ReactNode }) => {
  const [selectSection, setSelectSection] = useState<
    | "todayNewWord"
    | "todayReviewWord"
    | "learningWord"
    | "unLearnedWord"
    | "simpleWord"
  >("todayNewWord");
  return (
    <WordCollectionPage.Provider value={{ selectSection, setSelectSection }}>
      {children}
    </WordCollectionPage.Provider>
  );
};

export const useWordCollectionPageContext = () => {
  return useContext(WordCollectionPage);
};

export const WordTable = () => {
  const { defaultBook } = useUserBookState();

  //追加判断网络状态, 如果获取 用户书籍失败怎么办.

  if (defaultBook.name === "") {
    return <NoBook />;
  }
  return (
    <WordCollectionPageContext>
      <>
        <div className="flex min-h-[580px] w-full flex-row items-stretch justify-start justify-items-end gap-4 px-5 py-5 sm:flex-col">
          <LeftSection />
          <Content />
        </div>
      </>
    </WordCollectionPageContext>
  );
};

const sectionSubComponrnt = {
  todayNewWord: TodayNewWord,
  todayReviewWord: TodayReviewWord,
  learningWord: LearningWord,
  unLearnedWord: UnLearnedWord,
  simpleWord: SimpleWord,
};

const Content = () => {
  const { selectSection } = useWordCollectionPageContext();

  const CurrentSection = sectionSubComponrnt[selectSection];
  return (
    <div className="flex w-full flex-col justify-center px-[112px] sm:px-[30px]">
      <CurrentSection />
    </div>
  );
};
