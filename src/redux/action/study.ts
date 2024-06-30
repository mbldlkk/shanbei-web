import * as api from "../api/study";
import { studyAction, summaryWordItem } from "../slice/study";

export const getStudyWordPerStage = async (dispatch: Function) => {
  try {
    const { data } = await api.getStudyWordPerStage();
    console.log(data);
    dispatch(studyAction.resolveData(data));
    return;
  } catch (error) {
    throw error;
  }
};

export const getSomeWordCount = async (dispatch: Function) => {
  try {
    const { data } = await api.getSomeWordCount();
    console.log("进度请求", data);
    dispatch(studyAction.setSomeWordCount(data));
    dispatch(studyAction.toggleResolve());
    return;
  } catch (error) {
    throw error;
  }
};

export const knowWord = (
  dispatch: Function,
  summaryWordItem: summaryWordItem,
) => {
  dispatch(studyAction.knowWord(summaryWordItem));
};

export const unKnowWord = (
  dispatch: Function,
  summaryWordItem: summaryWordItem,
) => {
  dispatch(studyAction.unKnowWord(summaryWordItem));
};

export const toCheckIn = (dispatch: Function) => {
  dispatch(studyAction.toCheckIn());
};
export const toWord = (dispatch: Function) => {
  dispatch(studyAction.toWord());
};

export const nextWord = (dispatch: Function) => {
  dispatch(studyAction.nextWord());
};

export const toggleSimple = (dispatch: Function) => {
  dispatch(studyAction.toggleSimple());
};

export const updateAfterStudy = async (
  dispatch: Function,
  todayWord: {
    todayNewWord?: Array<any>;
    todayReviewWord?: Array<any>;
  },
) => {
  try {
    await api.updateAfterStudy(todayWord);
    dispatch(studyAction.toggleResolve());
  } catch (error) {
    throw error;
  }
};
