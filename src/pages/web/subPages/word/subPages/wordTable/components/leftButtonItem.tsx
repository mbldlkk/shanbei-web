import { twMerge as tm } from "tailwind-merge";
import { useWordCollectionPageContext } from "../wordTable";

export const LeftButtonItem = ({
  children,
  section,
}: {
  children: any;
  section:
    | "todayNewWord"
    | "learningWord"
    | "unLearnedWord"
    | "simpleWord"
    | "todayReviewWord";
}) => {
  const { selectSection, setSelectSection } = useWordCollectionPageContext();

  return (
    <button
      className={tm(
        "h-[90px] w-full shrink-0 text-center sm:h-fit sm:w-fit",
        selectSection === section &&
          "border-r-[#28bea0] text-[#28bea0] sm:border-b-2 sm:border-b-[#28bea0] md:border-r-2 lg:border-r-2 xl:border-r-2 2xl:border-r-2",
      )}
      onClick={() => {
        setSelectSection(section);
      }}
    >
      {children}
    </button>
  );
};
