import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/checkin";
import { STATUS } from "./tag";

export const fetchCheckIn = createAsyncThunk(
  "checkIn/fetchCheckIn",
  async () => {
    const response = await api.fetchTodayCheckIn();
    return response.data;
  },
);

export const postCheckIn = createAsyncThunk("checkIn/postCheckIn", async () => {
  const response = await api.postCheckIn();
  return response.data;
});

export const getCheckInTimes = createAsyncThunk("checkIn/times", async () => {
  const { data } = await api.fetchCheckInTimes();
  return data;
});

const checkInSlice = createSlice({
  name: "checkIn",
  initialState: {
    isCheckIn: false,
    checkInTimes: 0,
    status: STATUS.pending,
    error: null,
  } as {
    isCheckIn: boolean;
    checkInTimes: number;
    status: keyof typeof STATUS;
    error: any;
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCheckIn.fulfilled, (state, { payload }) => {
        state.status = STATUS.resolve;
        state.isCheckIn = payload;
      })
      .addCase(fetchCheckIn.rejected, (state, { error }) => {
        state.status = STATUS.reject;
        state.error = error.message;
      })
      .addCase(postCheckIn.fulfilled, (state, { payload }) => {
        console.log("提交打卡成功", payload);
        state.isCheckIn = payload;
      })
      .addCase(postCheckIn.rejected, (_, { error }) => {
        console.log(error.message);
      })
      .addCase(getCheckInTimes.pending, () => {
        console.log("测试, 是否在调用api 之前调用该函数?");
      })
      .addCase(getCheckInTimes.fulfilled, (state, { payload }) => {
        state.checkInTimes = payload;
      })
      .addCase(getCheckInTimes.rejected, (_, { error }) => {
        console.log(error.message);
      });
  },
});

export const checkInAction = checkInSlice.actions;

export const checkInReducer = checkInSlice.reducer;
