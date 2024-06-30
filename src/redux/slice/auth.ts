import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { accessToken: "" },
  reducers: {
    success(state, { payload }) {
      //登录注册可以共用该逻辑. 所以信号改为 认证成功
      localStorage.setItem("accessToken", payload);
      state.accessToken = payload;
    },
    signOut(state) {
      localStorage.removeItem("accessToken");
      state.accessToken = "";
    },
    getLocalAccessToken(state) {
      const token = localStorage.getItem("accessToken");
      if (token !== null) {
        state.accessToken = token;
        return;
      }
    },
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;
