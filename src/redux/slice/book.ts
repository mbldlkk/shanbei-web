import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "./tag";

export type bookItem = {
  id: number;
  name: string;
  wordCount: number;
  isPurchase?: boolean;
};

const bookSlice = createSlice({
  name: "book",
  initialState: {
    book: [],
    status: STATUS.pending,
  } as {
    book: Array<bookItem>;
    status: keyof typeof STATUS;
  },
  reducers: {
    resolveBook(state, { payload }) {
      state.book = payload;
  

      state.status = STATUS.resolve;
    },
    rejectBook() {},
  },
});

export const bookAction = bookSlice.actions;

export const bookReducer = bookSlice.reducer;
