import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "./tag";


const todayFamous = createSlice({
  name: "todayFamous",
  initialState: {
    status: STATUS.pending,
    todayFamous: {
      quoteCN: "",
      quoteEN: "",
      author: "",
    },
  } as {
    todayFamous: {
      quoteCN: String;
      quoteEN: String;
      author: String;
    };
    status: keyof typeof STATUS;
  }, 
  reducers: {
    setTodayFamous(state, { payload }) {
      state.todayFamous = payload;
      state.status = STATUS.resolve;
    },
  },
});

export const todayFamousAction = todayFamous.actions;

export const todayFamousReducer = todayFamous.reducer;
