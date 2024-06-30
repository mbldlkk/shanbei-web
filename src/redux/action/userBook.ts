import { AxiosError } from "axios";
import * as api from "../api/userBook";
import { userBookAction } from "../slice/userBook";
import { authActions } from "../slice/auth";
import { initStudyPlan } from "./studyPlan";

export const getUserBook = async (dispatch: Function) => {
  try {
    dispatch(dispatch(userBookAction.togglePending()));
    const { data } = await api.getUserBook();
    console.log("请求到的用户书籍", data);
    dispatch(userBookAction.getUserBook(data));
    dispatch(dispatch(userBookAction.toggleResolve()));
  } catch (error) {
    if ((error as AxiosError).response?.status === 401) {
      dispatch(authActions.signOut());
    }
    throw error;
  }
};

export const addUserBook = async (
  dispatch: Function,
  bookId: number,
  addedBook: any,
) => {
  try {
    await api.addUserBook(bookId);
    dispatch(userBookAction.addUserBook(addedBook));
  } catch (error) {
    throw error;
  }
};

export const deleteUserBook = async (dispatch: Function, bookId: number) => {
  try {
    const { data } = await api.deleteUserBook(bookId);
    //只发送是否成功, 成功就直接本地删除
    //或许只需要 状态200就删除 思路更好?
    console.log(data);
    if (data === "删除成功") {
      dispatch(userBookAction.deleteUserBook(bookId));
    }
  } catch (error) {
    throw error;
  }
};

export const switchDefaultUserBook = async (
  dispatch: Function,
  bookId: number,
) => {
  try {
    const { data } = await api.switchDefaultUserBook(bookId);
    console.log(data);
    if (data === "切换默认书籍成功") {
      dispatch(userBookAction.switchDefaultUserBook(bookId));
    }
  } catch (error) {
    throw error;
  }
};

export const togglePending = async (dispatch: Function) =>
  dispatch(userBookAction.togglePending());

export const firstAddUserBook = async (dispatch: Function, bookId: number) => {
  try {
    const { data } = await api.firstAddUserBook(bookId);
    console.log("第一次添加用户书籍后", data);
    //本地就是添加这个书籍. 不需要考虑 首次运行方法
    dispatch(userBookAction.addDefaultUserBook(data));

    initStudyPlan(dispatch);
  } catch (error) {
    throw error;
  }
};
