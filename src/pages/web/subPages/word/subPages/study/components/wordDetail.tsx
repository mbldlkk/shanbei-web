import { useDispatch } from "react-redux";
import { Tips } from "./tips";
import { NextWordButton } from "./nextWordButton";
import { WordDetailSection } from "./wordDetailSection";
import { nextWord } from "../../../../../../../redux/action/study";
import { Sections } from "../study";

export const WordDetail = ({
  setSection, // setIsShowWordDetail,
}: {
  setSection: Function;
}) => {
  const dispatch = useDispatch();

  return (
    <div className="relative flex flex-col items-center gap-4 pb-1 pt-8">
      <Tips />

      <NextWordButton
        onclick={() => {
          // setIsShowWordDetail(false);
          setSection(Sections.knowWord);
          nextWord(dispatch);
        }}
        content="下一个单词"
      />

      <WordDetailSection />
    </div>
  );
};
