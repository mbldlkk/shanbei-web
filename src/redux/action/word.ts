import { AxiosError } from "axios";
import * as api from "../api/word";
import { wordActions } from "../slice/word";

//获取今日单词
export const getTodayNewWord = async (dispatch: Function, page: number) => {
  try {
    const { data } = await api.getTodayNewWord(page);
    dispatch(wordActions.getTodayNewWord(data));
  } catch (error) {
    throw error;
  }
};

export const getTodayNewWordCount = async (dispatch: Function) => {
  try {
    const { data } = await api.getTodayNewWordCount();
    dispatch(wordActions.getTodayNewWordCount(data));
  } catch (error) {
    throw error;
  }
};

//今日复习单词
export const getTodayReviewWord = async (dispatch: Function, page: number) => {
  try {
    const { data } = await api.getTodayReviewWord(page);
    dispatch(wordActions.getTodayReviewWord(data));
  } catch (error) {
    throw error;
  }
};

export const getTodayReviewWordCount = async (dispatch: Function) => {
  try {
    const { data } = await api.getTodayReviewWordCount();
    dispatch(wordActions.getTodayReviewWordCount(data));
  } catch (error) {
    throw error;
  }
};

//在学单词
export const getLearningWord = async (
  dispatch: Function,
  page: number,
  // order: "DES",
) => {
  try {
    const { data } = await api.getLearningWord(page);
    dispatch(wordActions.getLearningWord(data));
  } catch (error) {
    throw error;
  }
};

export const getLearningWordCount = async (dispatch: Function) => {
  try {
    const { data } = await api.getLearningWordCount();
    dispatch(wordActions.getLearningWordCount(data));
  } catch (error) {
    throw error;
  }
};

//未学单词
export const getUnLearnedWord = async (dispatch: Function, page: number) => {
  try {
    const { data } = await api.getUnLearnedWord(page);
    dispatch(wordActions.getUnLearnedWord(data));
  } catch (error) {
    throw error;
  }
};

export const getUnLearnedWordCount = async (dispatch: Function) => {
  try {
    const { data } = await api.getUnLearnedWordCount();
    dispatch(wordActions.getUnLearnedWordCount(data));
  } catch (error) {
    throw error;
  }
};

//简单词
export const getSimpleWord = async (dispatch: Function, page: number) => {
  try {
    const { data } = await api.getSimpleWord(page);
    dispatch(wordActions.getSimpleWord(data));
  } catch (error) {
    throw error;
  }
};

export const getSimpleWordCount = async (dispatch: Function) => {
  try {
    const { data } = await api.getSimpleWordCount();
    dispatch(wordActions.getSimpleWordCount(data));
  } catch (error) {
    throw error;
  }
};

export const getWordByName = async (dispatch: Function, name: string) => {
  try {
    const { data } = await api.getWordByName(name);
    dispatch(wordActions.getWordByName(data));
  } catch (error) {
    dispatch(wordActions.setError((error as AxiosError).response?.status));
  }
};
