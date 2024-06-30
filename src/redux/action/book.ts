import * as api from "../api/book";
import { bookAction } from "../slice/book";

export const getBookByTag = async (dispatch: Function, tag: string) => {
  try {
    const { data } = await api.getBookByTag(tag);
    console.log(data);
    dispatch(bookAction.resolveBook(data));
  } catch (error) {
    throw error;
  }
};
