import * as api from "../api/studyPlan";
import { studyPlanAction } from "../slice/studyPlan";

export const updateTodayStudyPlan = async (dispatch: Function) => {
  try {
    const { data } = await api.updateTodayStudyPlan();
    console.log("服务端请求到的学习计划", data);
    dispatch(
      studyPlanAction.updateStudyPlan({
        studyPlan: data,
        latestUpdateDate: new Date().toDateString(),
      }),
    );
    return;
  } catch (error) {
    throw error;
  }
};

export const initStudyPlan = (dispatch: Function) => {
  const studyPlanString = localStorage.getItem("studyPlan");
  if (studyPlanString === null) {
    //不存在就去请求更新
    updateTodayStudyPlan(dispatch);
    return;
  }
  //存在就需要考虑最近的更新时间
  const studyPlan = JSON.parse(studyPlanString);
  const isSameDay = studyPlan.latestUpdateDate === new Date().toDateString();
  if (isSameDay) {
    //存在且是同一天,  将数据传给dispatch
    dispatch(studyPlanAction.setStudyplan(studyPlan)); //此处的有 最近更新时间
    return;
  }

  updateTodayStudyPlan(dispatch);
};
