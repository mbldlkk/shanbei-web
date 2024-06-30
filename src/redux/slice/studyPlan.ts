import { createSlice } from "@reduxjs/toolkit";

const studyPlanSlice = createSlice({
  name: "studyPlan",
  initialState: {
    studyPlan: {
      todayNeedStudyNewWordCount: 0,
      todayNeedReviewWordCount: 0,
    },
    latestUpdateDate: "",
  },
  reducers: {
    getStudyPlan() {
      //   state.studyPlan = payload;
      //   localStorage.getItem("studyPlan", JSON.stringify(payload));
    },
    updateStudyPlan(state, { payload }) {
      state.studyPlan = payload.studyPlan;
      state.latestUpdateDate = payload.latestUpdateDate;
      localStorage.setItem(
        "studyPlan",
        JSON.stringify({
          studyPlan: payload.studyPlan,
          latestUpdateDate: payload.latestUpdateDate,
        }),
      );
    },
    setStudyplan(state, { payload }) {
      state.studyPlan = payload.studyPlan;
      state.latestUpdateDate = payload.latestUpdateDate;
    },
  },
});

export const studyPlanAction = studyPlanSlice.actions;

export const studyPlanReducer = studyPlanSlice.reducer;
