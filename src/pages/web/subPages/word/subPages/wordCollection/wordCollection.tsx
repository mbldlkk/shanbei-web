import { ReactNode, useContext, useState } from "react";

import { createContext } from "react";
import { LeftSection } from "./components/leftSection";
import { Content } from "./components/content";
import { RightSection } from "./components/rightSection";

let init: any;
const WordCollectionPage = createContext(init);

const WordCollectionPageContext = ({ children }: { children: ReactNode }) => {
  const currentPage = useState(1);
  const [selectIndex, setSelectIndex] = useState<"1" | "2" | "3" | "4" | "5">(
    "1",
  );
  return (
    <WordCollectionPage.Provider
      value={{ currentPage, selectIndex, setSelectIndex }}
    >
      {children}
    </WordCollectionPage.Provider>
  );
};

export const useWordCollectionPageContext = () => {
  return useContext(WordCollectionPage);
};

export const WordCollection = () => {
  return (
    <WordCollectionPageContext>
      <div className="flex min-h-[580px] w-full flex-row items-stretch justify-between justify-items-end gap-4 px-5 py-5">
        <LeftSection />
        <Content />
        <RightSection />
      </div>
    </WordCollectionPageContext>
  );
};
