import { NavLink } from "react-router-dom";
import { useUserBookState } from "../../../../../../../redux/store";
import { BookItem } from "./bookItem";

export const MyDeskSection = () => {
  const { otherBook } = useUserBookState();

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="py-4">
          <span className="text-lg font-semibold">我的书桌</span>
          <span className="text-[#99a6c4]">({otherBook.length}/10)</span>
        </div>

        <NavLink
          className="rounded-xl border border-[#28bea0] px-4 py-1 text-[#28bea0]"
          to={"/web/word/books/select"}
        >
          添加新书
        </NavLink>
      </div>
      <div className="flex- flex flex-wrap justify-between gap-2">
        {otherBook.map((i) => (
          <BookItem
            title={i.name}
            key={i.id}
            wordCount={i.wordCount}
            id={i.id}
          />
        ))}
      </div>
    </div>
  );
};
