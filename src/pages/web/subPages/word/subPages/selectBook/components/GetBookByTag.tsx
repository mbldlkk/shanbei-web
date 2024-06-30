import { useDispatch } from "react-redux";
import { useBookState, useTagState } from "../../../../../../../redux/store";
import { useEffect } from "react";
import { getBookByTag } from "../../../../../../../redux/action/book";
import { BookSection } from "./BookSection";
import { STATUS } from "../../../../../../../redux/slice/tag";

export const GetBookByTag = () => {
  const dispatch = useDispatch();
  const { currentTag } = useTagState();
  const { status } = useBookState();

  useEffect(() => {
    getBookByTag(dispatch, currentTag);
  }, [currentTag]);

  if (status === STATUS.pending) {
    return <>书籍加载中 ...</>;
  }

  return <BookSection />;
};
