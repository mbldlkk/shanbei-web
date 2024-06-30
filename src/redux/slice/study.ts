import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "./tag";

type studyNewWordItem = {
  id: string;
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

type studyReviewWordItem = {
  studyTimes: number;
  word: studyNewWordItem;
};

export type summaryWordItem = {
  name: string;
  USAudio: string;
  type: string;
  explainCN: string;
  isKnow: boolean;
};

type finishNewWord = {
  wordId: string;
  isSimple?: boolean;
  nextReviewTime: Date;
};

type finishReviewWord = {
  wordId: string;
  studyTimes: number;
  isSimple?: boolean;
  nextReviewTime: Date;
};

export enum PAGE {
  word = "word",
  summary = "summary",
  checkIn = "checkIn",
}

export enum WORDSoundMode {
  US,
  UK,
  Close,
}

const studySlice = createSlice({
  name: "study",
  initialState: {
    settings: { spellMode: false, wordSoundMode: WORDSoundMode.Close },
    studyWord: { todayNewWord: [], todayReviewWord: [] },
    currentStudyWord: {
      id: "",
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
      isKnow: false,
      isSimple: false,
    },
    page: PAGE.word,
    finishWord: { todayNewWord: [], todayReviewWord: [] },
    currentStudyMode: 0,
    summaryWordData: [],
    startIndex: 0,
    progress: {
      userBookLearnedWord: 0,
      todayStudyedSuccessWordCount: 0,
      todayStudyedFailueWordCount: 0,
    },

    status: STATUS.pending,
  } as {
    page: PAGE;
    settings: { spellMode: boolean; wordSoundMode: WORDSoundMode };
    studyWord: {
      todayNewWord: Array<studyNewWordItem>;
      todayReviewWord: Array<studyReviewWordItem>;
    };
    startIndex: number;
    finishWord: {
      todayNewWord: Array<finishNewWord>;
      todayReviewWord: Array<finishReviewWord>;
    };
    currentStudyWord: studyNewWordItem & {
      isKnow?: boolean;
      isSimple?: boolean;
    };
    //0是新词 1是复习单词 还是应该追求语义化,
    currentStudyMode: 0 | 1 | 2; 
    summaryWordData: Array<summaryWordItem>;
    progress: {
      userBookLearnedWord: number;
      todayStudyedSuccessWordCount: number;
      todayStudyedFailueWordCount: number;
    };
    status: keyof typeof STATUS;
  },
  reducers: {
    resolveData(
      state,
      {
        payload: { type, data },
      }: { payload: { type: 0 | 1; data: Array<any> } },
    ) {
      const { studyWord } = state;

      state.currentStudyMode = type;

      if (type === 0) {
        //新词就将服务端的数据传给todayNewWord
        studyWord.todayNewWord = data;
        state.currentStudyWord = data[0];
      } else {
        //否则就传给复习单词
        studyWord.todayReviewWord = data;
        state.currentStudyWord = data[0].word;
      }

      state.status = STATUS.resolve;
    },
    toggleLoading(state) {
      //请求新一轮单词的时候 显示加载状态.
      state.status = STATUS.pending;
    },
    toggleResolve(state) {
      state.status = STATUS.resolve;
    },
    toggleSimple(state) {
      const {
        currentStudyMode,
        currentStudyWord,
        finishWord,
        startIndex,
        studyWord,
        progress,
      } = state;
      //修改 设置为简单词
      currentStudyWord.isSimple = true;
      const { id } = currentStudyWord;

      const { name, USAudio, type, explainCN } = currentStudyWord;
      progress.todayStudyedSuccessWordCount =
        progress.todayStudyedSuccessWordCount + 1;

      state.summaryWordData.push({
        name,
        USAudio,
        type,
        explainCN,
        isKnow: true,
      });

      //简单词的下次复习时间默认今天
      const nextReviewTime = new Date().toISOString() as any; 
      const isSimple = true;
      if (currentStudyMode === 0) {
        finishWord.todayNewWord.push({ wordId: id, nextReviewTime, isSimple });
      } else {
        const studyTimes = studyWord.todayReviewWord[startIndex].studyTimes;
        finishWord.todayReviewWord.push({
          wordId: id,
          nextReviewTime,
          studyTimes,
          isSimple,
        });
      }
      // 需要 追加当前偏移索引+1
      state.startIndex = startIndex + 1;
    },
    setSomeWordCount(state, { payload }) {
      // 将三个进度设置为状态.
      state.progress = payload;
    },
    knowWord(state, { payload }: { payload: summaryWordItem }) {
      const {
        finishWord,
        currentStudyMode,
        currentStudyWord: { id },
        studyWord,
        startIndex,
      } = state;

      state.progress.todayStudyedSuccessWordCount =
        state.progress.todayStudyedSuccessWordCount + 1;
      // 添加到 小结中去
      if (currentStudyMode === 2) {
        state.progress.todayStudyedFailueWordCount =
          state.progress.todayStudyedFailueWordCount - 1;
      }

      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const nextReviewTime = tomorrow.toISOString() as any;

      state.summaryWordData.push(payload);

      if (currentStudyMode === 0) {
        finishWord.todayNewWord.push({ wordId: id, nextReviewTime });
      } else {
        const studyTimes = studyWord.todayReviewWord[startIndex].studyTimes + 1;
        finishWord.todayReviewWord.push({
          wordId: id,
          nextReviewTime,
          studyTimes,
        });
      }

      state.startIndex = state.startIndex + 1;

      state.currentStudyWord.isKnow = true;
    },
    unKnowWord(state, { payload }: { payload: summaryWordItem }) {
      const {
        currentStudyMode,
        finishWord,
        currentStudyWord: { id },
        studyWord,
        startIndex,
      } = state;

      if (currentStudyMode !== 2) {
        state.progress.todayStudyedFailueWordCount =
          state.progress.todayStudyedFailueWordCount + 1;
      }
      state.summaryWordData.push(payload);

      const nextReviewTime = new Date().toISOString() as any;
      if (currentStudyMode === 0) {
        finishWord.todayNewWord.push({ wordId: id, nextReviewTime });
      } else {
        const studyTimes = studyWord.todayReviewWord[startIndex].studyTimes + 1;
        finishWord.todayReviewWord.push({
          wordId: id,
          nextReviewTime,
          studyTimes,
        });
      }

      state.startIndex = state.startIndex + 1;
      state.currentStudyWord.isKnow = false;
    },
    addToSummary(
      { summaryWordData },
      {
        payload,
      }: {
        payload: {
          name: string;
          USAudio: string;
          type: string;
          explainCN: string;
          isKnow: boolean;
        };
      },
    ) {
      //无论是否记得都要将当前单词的部分信息添加至小结模块.
      summaryWordData.push(payload);
    },
    addKnowWordToFinishWordData(
      state,
      { payload }: { payload: { wordId: string; isSimple?: boolean } },
    ) {
      const today = new Date();
      if (state.currentStudyMode === 0) {
        //添加到新词
        state.finishWord.todayNewWord.push({
          ...payload,
          nextReviewTime: today,
        });
      } else {
        //添加到复习单词
        const studyTimes =
          state.studyWord.todayReviewWord[state.startIndex].studyTimes + 1;
        state.finishWord.todayReviewWord.push({
          ...payload,
          studyTimes,
          nextReviewTime: today,
        });
      }
    },
    addUnKnowWordToFnishWordData(
      state,
      { payload }: { payload: { wordId: string; isSimple?: boolean } },
    ) {
      const today = new Date();
      //today下次复习时间 变成明天
      today.setDate(today.getDate() + 1);

      if (state.currentStudyMode === 0) {
        //添加到新词
        state.finishWord.todayNewWord.push({
          ...payload,
          nextReviewTime: today,
        });
      } else {
        //添加到复习单词
        const studyTimes =
          state.studyWord.todayReviewWord[state.startIndex].studyTimes + 1;
        state.finishWord.todayReviewWord.push({
          ...payload,
          studyTimes,
          nextReviewTime: today,
        });
      }
    },
    toCheckIn(state) {
      state.page = PAGE.checkIn;
      state.status = STATUS.resolve;
    },
    toWord(state) {
      state.page = PAGE.word;
    },
    reset(state) {
      console.log("是否生效了?");
      state.startIndex = 0;
      state.finishWord.todayNewWord = [];
      state.finishWord.todayReviewWord = [];
      state.summaryWordData = [];
    },
    nextWord(state) {
      const {
        studyWord: { todayNewWord, todayReviewWord },
        startIndex,
        currentStudyMode,
      } = state;

      if (currentStudyMode === 0) {
        if (startIndex < todayNewWord.length) {
          state.currentStudyWord = todayNewWord[startIndex];
        } //否则就 直接进入小结页面
        else {
          state.page = PAGE.summary;
          state.status = STATUS.pending;
        }
      } else {
        if (startIndex < todayReviewWord.length) {
          state.currentStudyWord = todayReviewWord[startIndex].word;
        } else {
          state.page = PAGE.summary;
          state.status = STATUS.pending;
        }
      }
    },
    setCurrentWithSearchWord(state, { payload }) {
      state.currentStudyWord = payload;
    },
    switchSpellMode(state) {
      state.settings.spellMode = !state.settings.spellMode;
      localStorage.setItem("settings", JSON.stringify(state.settings));
    },
    fetchSettings() {
    },
    updateSettins() {},
    getSettings(state) {
      const jsonset = localStorage.getItem("settings"); // 如果没有呢?
      if (jsonset !== null) {
        const setting = JSON.parse(jsonset);
        state.settings = setting;
      }
    },
    defaultSettins() {},
    toggleWordSoundMode(state, { payload }) {
      state.settings.wordSoundMode = payload;
      localStorage.setItem("settings", JSON.stringify(state.settings));
    },
    removeLocalData() {
      localStorage.removeItem("studyPlan"); //直接clear就行了.
    },
  },
});

export const studyAction = studySlice.actions;

export const studyReducer = studySlice.reducer;
