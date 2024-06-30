import { useDispatch } from "react-redux";

import { twMerge as tm } from "tailwind-merge";
import {
  getTodayNewWord,
  getTodayReviewWord,
  getLearningWord,
  getUnLearnedWord,
  getSimpleWord,
} from "../../../../../../../redux/action/word";
import { useWordCollectionPageContext } from "../wordTable";

const SubComponrntAPI = {
  todayNewWord: getTodayNewWord,
  todayReviewWord: getTodayReviewWord,
  learningWord: getLearningWord,
  unLearnedWord: getUnLearnedWord,
  simpleWord: getSimpleWord,
};

export const PaginationItem = ({
  currentIndex,
  setCurrentIndex,
  index,
}: {
  currentIndex: number;
  setCurrentIndex: Function;
  index: number;
}) => {
  const { selectSection } = useWordCollectionPageContext();
  const dispatch = useDispatch();
  // const fetchAPI=

  return (
    <button
      className={tm(
        "py- border border-[#cccccc] px-2 hover:bg-[#28bea0] hover:text-white",
        currentIndex === index ? "bg-[#28bea0] text-white" : null,
      )}
      onClick={() => {
        setCurrentIndex(index);
        SubComponrntAPI[selectSection](dispatch, index);
      }}
    >
      {index}
    </button>
  );
};

export const PaginationItem2 = () => {
  return (
    <button
      className={tm(
        "py- border border-[#cccccc] px-2 hover:bg-[#28bea0] hover:text-white",
      )}
    >
      ...
    </button>
  );
};
