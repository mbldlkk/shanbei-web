import { useUserBookState } from "../../../../../../redux/store";
import { NoBook } from "../wordTable/components/noBook";
import { LearningBookSection } from "./components/learningBooks";
import { MyDeskSection } from "./components/myDeskSection";
import { MyUploadBookSection } from "./components/myUploadBook";

export const Books = () => {
  const { defaultBook } = useUserBookState();

  console.log("当前用户书籍", defaultBook);

  if (defaultBook.name === "") {
    return <NoBook />;
  }
  //跳转至 选择书籍的页面.因为单词学习和 词表是针对具体书籍的, 所以都需要检测 如果不存在,都需要跳转至

  return (
    <>
      <div className="flex w-full flex-col gap-10 px-8 py-5">
        <LearningBookSection />
        <MyUploadBookSection />
        <MyDeskSection />
      </div>
    </>
  );
};
