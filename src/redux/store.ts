import { configureStore } from "@reduxjs/toolkit";
import { wordReducer } from "./slice/word";
import { authReducer } from "./slice/auth";
import { userBookReducer } from "./slice/userBook";
import { bookReducer } from "./slice/book";
import { tagReducer } from "./slice/tag";
import { todayFamousReducer } from "./slice/famousQuote";
import { noteReducer } from "./slice/note";

import { useDispatch, useSelector } from "react-redux";
import { studyPlanReducer } from "./slice/studyPlan";
import { studyReducer } from "./slice/study";
import { checkInReducer } from "./slice/checkin";

export const store = configureStore({
  reducer: {
    word: wordReducer,
    auth: authReducer,
    userBook: userBookReducer,
    book: bookReducer,
    tag: tagReducer,
    todayFamous: todayFamousReducer,
    note: noteReducer,
    studyPlan: studyPlanReducer,
    study: studyReducer,
    checkIn: checkInReducer,
  },
});

type storeState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector = useSelector<storeState>;

export const useWordState = () =>
  useSelector((store: storeState) => store.word);

export const useAuthState = () =>
  useSelector((store: storeState) => store.auth);

export const useUserBookState = () =>
  useSelector((store: storeState) => store.userBook);

export const useBookState = () =>
  useSelector((store: storeState) => store.book);

export const useTagState = () => useSelector((store: storeState) => store.tag);

export const useTodayFamousState = () =>
  useSelector((store: storeState) => store.todayFamous);

export const useNoteState = () =>
  useSelector((store: storeState) => store.note);

export const useStudyPlanState = () =>
  useSelector((store: storeState) => store.studyPlan);

export const useStudyState = () =>
  useSelector((store: storeState) => store.study);

export const useCheckInState = () =>
  useSelector((store: storeState) => store.checkIn);

export const useDemo = () =>
  useSelector((store: storeState) => {
    return {
      a: store.study.status,
      currentStudyMode: store.study.currentStudyMode,
      page: store.study.page,
      todayStudyedSuccessWordCount:
        store.study.progress.todayStudyedSuccessWordCount,
      todayNewWord: store.study.finishWord.todayNewWord,
      todayReviewWord: store.study.finishWord.todayReviewWord,
    };
  });
