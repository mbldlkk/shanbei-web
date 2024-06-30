import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "./tag";

type partWordItem = {
  id: string;
  name: string;
  explainCN: string;
  USAudio: string;
  type: string;
};

type fullWordItem = {
  name: string;
  explainCN: string;
  UKSymbol: string;
  USSymbol: string;
  USAudio: string;
  UKAudio: string;
  type: string;
  sentence: string;
  sentenceCN: string;
  sentenceAudio: string;
};

const wordSlice = createSlice({
  name: "word",
  initialState: {
    status: STATUS.pending,
    error: null,
    todayNewWord: [],
    todayNewWordCount: 0,
    todayReviewWord: [],
    todayReviewWordCount: 0,
    learningWord: [],
    learningWordCount: 0,
    unLearnedWord: [],
    unLearnedWordCount: 0,
    simpleWord: [],
    simpleWordCount: 0,
    searchWord: {
      name: "",
      explainCN: "",
      UKSymbol: "",
      USSymbol: "",
      USAudio: "",
      UKAudio: "",
      type: "",
      sentence: "",
      sentenceCN: "",
      sentenceAudio: "",
    },
  } as {
    status: keyof typeof STATUS;
    error: any;
    todayNewWord: Array<partWordItem>;
    todayNewWordCount: number;
    todayReviewWord: Array<{ word: partWordItem }>;
    todayReviewWordCount: number;
    learningWord: Array<{ word: partWordItem }>;
    learningWordCount: number;
    unLearnedWord: Array<partWordItem>;
    unLearnedWordCount: number;
    simpleWord: Array<{ word: partWordItem }>;
    simpleWordCount: number;
    searchWord: fullWordItem;
  },
  reducers: {
    getTodayNewWord(state, { payload }) {
      state.todayNewWord = payload;
    },
    getTodayNewWordCount(state, { payload }) {
      state.todayNewWordCount = payload;
    },
    getTodayReviewWord(state, { payload }) {
      state.todayReviewWord = payload;
    },
    getTodayReviewWordCount(state, { payload }) {
      state.todayReviewWordCount = payload;
    },
    getLearningWord(state, { payload }) {
      state.learningWord = payload;
    },
    getLearningWordCount(state, { payload }) {
      state.learningWordCount = payload;
    },
    getUnLearnedWord(state, { payload }) {
      state.unLearnedWord = payload;
    },
    getUnLearnedWordCount(state, { payload }) {
      state.unLearnedWordCount = payload;
    },
    getSimpleWord(state, { payload }) {
      state.simpleWord = payload;
    },
    getSimpleWordCount(state, { payload }) {
      state.simpleWordCount = payload;
    },
    getWordByName(state, { payload }) {
      state.searchWord = payload;
      state.status = STATUS.resolve;
      state.error = null;
    },
    setError(state, { payload }) {
      state.error = payload;
    },
  },
});

export const wordActions = wordSlice.actions;

export const wordReducer = wordSlice.reducer;
