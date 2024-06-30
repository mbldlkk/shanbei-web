import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTagState } from "../../../../../../redux/store";
import { getBookTag } from "../../../../../../redux/action/tag";
import { STATUS } from "../../../../../../redux/slice/tag";
import { SelectBookByTag } from "./components/selectBookByTag";
import { SelectTag } from "./components/SelectTag";

export const Select = () => {
  return;
};

export const SelectBook = () => {
  const dispatch = useDispatch();
  const tagState = useTagState();
  useEffect(() => {
    if (tagState.status === STATUS.pending) {
      getBookTag(dispatch);
    }
  }, []);

  if (tagState.currentTag !== "") {
    return <SelectBookByTag />;
  }

  if (tagState.status === STATUS.pending) {
    return <>加载中</>;
  }

  if (tagState.status === STATUS.resolve) {
    // 当前还没拿tag, 所以进入selectTag页面
    return <SelectTag />;
  }
};
