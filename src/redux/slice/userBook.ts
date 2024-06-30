import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "./tag";
import { bookItem } from "./book";

//版1
// type userBookItem = {
//   book: {
//     id: number;
//     name: string;
//     wordCount: number;
//   };
//   isCurrentLearn: boolean;
// };

type userBookItem = {
  id: number;
  name: string;
  wordCount: number;
  isCurrentLearn: boolean;
};

const userBookSlice = createSlice({
  name: "userBook",
  initialState: {
    defaultBook: {
      id: -1,
      name: "",
      wordCount: -1,
    },
    otherBook: [],
    status: STATUS.pending,
  } as {
    defaultBook: bookItem;
    otherBook: Array<bookItem>;
    status: keyof typeof STATUS;
  },
  reducers: {
    getUserBook(state, { payload }) {
      const groupData = (payload as Array<userBookItem>).reduce(
        (group, item) => {
          item.isCurrentLearn
            ? (group.defaultBook = item)
            : group.otherBook.push(item);
          return group;
        },
        {
          defaultBook: { id: -1, name: "", wordCount: -1 },
          otherBook: [],
        } as { defaultBook: bookItem; otherBook: Array<bookItem> },
      );

      state.defaultBook = groupData.defaultBook;
      state.otherBook = groupData.otherBook;
      state.status = STATUS.resolve;
    },
    addUserBook(state, { payload }) {
      //用户点击书籍 添加至自己的书库中. 如果服务端提示添加成功则
      state.otherBook.push(payload);
      state.status = STATUS.resolve;
    },
    addDefaultUserBook(state, { payload }) {
      state.defaultBook = payload;
      state.status = STATUS.resolve;
    },
    deleteUserBook(state, { payload }) {
      const newOtherBook = state.otherBook.filter(
        (book) => book.id !== payload,
      );
      //筛选出非选中id的book
      state.otherBook = newOtherBook;

      // state.status = STATUS.resolve;
    },
    switchDefaultUserBook(state, { payload }) {
      const groupData = state.otherBook.reduce(
        (group, item) => {
          item.id === payload
            ? (group.newDefaultBook = item)
            : group.newOtherBook.push(item);
          return group;
        },
        {
          newDefaultBook: { id: -1, name: "", wordCount: -1 },
          newOtherBook: [state.defaultBook],
        } as { newDefaultBook: bookItem; newOtherBook: Array<bookItem> },
      );

      state.defaultBook = groupData.newDefaultBook;
      state.otherBook = groupData.newOtherBook;
    },
    togglePending(state) {
      state.status = STATUS.pending;
    },
    toggleResolve(state) {
      state.status = STATUS.resolve;
    },
  },
});

export const userBookAction = userBookSlice.actions;

export const userBookReducer = userBookSlice.reducer;
