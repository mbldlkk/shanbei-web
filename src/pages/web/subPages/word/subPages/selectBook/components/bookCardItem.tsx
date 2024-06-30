import { useDispatch } from "react-redux";
import { useUserBookState } from "../../../../../../../redux/store";
import {
  addUserBook,
  firstAddUserBook,
  togglePending,
} from "../../../../../../../redux/action/userBook";

export const BookCardItem = ({
  id,
  bookId,
  title,
  wordCount,
}: {
  id: number;
  bookId: number;
  title: string;
  wordCount: number;
}) => {
  const dispatch = useDispatch();
  const { defaultBook, otherBook } = useUserBookState();
  const handleClick = () => {
    if (defaultBook.name === "") {
      firstAddUserBook(dispatch, bookId);
    } else {
      addUserBook(dispatch, bookId, { id, name: title, wordCount });
    }
    togglePending(dispatch);
  };

  const isDefaultBook = title === defaultBook.name;
  const isUserOtherBook =
    otherBook.findIndex((item) => item.name === title) >= 0;
  console.log({ isDefaultBook, isUserOtherBook });

  const isUserBook = isDefaultBook || isUserOtherBook;

  return (
    <div className="h1-[250px] w-[140px]">
      <div className="relative">
        {isUserBook && (
          <p className="absolute bottom-1 right-1 rounded-xl bg-[#209e85] px-2 text-white">
            正在学习中
          </p>
        )}
        <img
          src=""
          alt={title}
          className="h-[200px] cursor-pointer rounded-xl bg-[#e2e8f0]"
          onClick={isUserBook ? () => {} : handleClick}
        />
      </div>
      <h3 className="text-lg font-normal">{title}</h3>
      <p className="text-[#b1b5bf]">{wordCount === null ? 0 : wordCount}词</p>
    </div>
  );
};
