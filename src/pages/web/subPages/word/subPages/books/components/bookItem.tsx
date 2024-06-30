import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  deleteUserBook,
  switchDefaultUserBook,
} from "../../../../../../../redux/action/userBook";

export const BookItem = ({
  id,
  title,
  wordCount,
}: {
  id: number;
  title: string;
  wordCount: number;
}) => {
  const dispatch = useDispatch();
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleDeleteBook = () => {
    setIsDelete(true);
    deleteUserBook(dispatch, id);
  };
  const handleSwitchBook = () => {
    setIsUpdate(true);
    switchDefaultUserBook(dispatch, id);
  };

  return (
    <div className="ice flex h-[250px] w-[604px] flex-row items-center gap-5 rounded-xl border border-red-400 bg-[#fafafa] px-8 py-4">
      <img
        src=""
        alt={title}
        className="h-[200px] w-[140px] rounded-xl bg-blue-300"
      />
      <div className="flex h-full w-[70%] flex-col justify-evenly">
        <p className="text-xl font-semibold">{title}</p>
        <p>
          已完成 {0}/{wordCount}词
        </p>
        <div className="flex w-[100%] items-center justify-between">
          <button onClick={handleDeleteBook} disabled={isDelete ? true : false}>
            {isDelete ? (
              "删除书籍中..."
            ) : (
              <i className="text-2xl">
                <IoTrashOutline />
              </i>
            )}
          </button>
          <button
            className="rounded-lg border bg-[#e3f6f2] px-4 py-1 text-[#28bea0]"
            onClick={handleSwitchBook}
            disabled={isUpdate ? true : false}
          >
            {isUpdate ? "切换书籍中..." : "学习此书"}
          </button>
        </div>
      </div>
    </div>
  );
};
