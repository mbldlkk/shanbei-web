import axios from "axios";
import { getToken } from "../storge";
const baseURL = "http://127.0.0.1:14322/word";


const myAxios = axios.create({
  baseURL,
  timeout: 5000,
});

myAxios.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
); 


//今日新词
export const getTodayNewWord = (page: number) =>
  myAxios.get(`today_newWord_items?page=${page}`);

export const getTodayNewWordCount = () =>
  myAxios.get("today_newWord_items/count");

//今日复习词
export const getTodayReviewWord = (page: number) =>
  myAxios.get(`today_reviewWord_items?page=${page}`);

export const getTodayReviewWordCount = () =>
  myAxios.get("today_reviewWord_items/count");

//未学单词
export const getUnLearnedWord = (page: number) =>
  myAxios.get(`unlearned_items?page=${page}`);

export const getUnLearnedWordCount = () => myAxios.get("unlearned_items/count");

//学习中单词
const orderBy = "CREATED_AT";
const order = "DES";
export const getLearningWord = (
  page: number,
  // orderBy: "CREATED_AT",
  // order: "DES",
) =>
  myAxios.get(`learning_items?page=${page}&order_by=${orderBy}&order=${order}`);

export const getLearningWordCount = () => myAxios.get("learning_items/count");

//简单词
export const getSimpleWord = (page: number) =>
  myAxios.get(`simple_learned_items?page=${page}`);

export const getSimpleWordCount = () =>
  myAxios.get("simple_learned_items/count");

//学习时获取单词
export const getTodayWordPerStudyStage = (studyMode: string) =>
  myAxios.get(`today_word_per_study_stage?study_mode=${studyMode}`);

//学习后更新学习记录
export const updateAfterStudy = (studyMode: string) =>
  myAxios.get(`update_after_study?study_mode=${studyMode}`);

// 由于api 层获取的数据最终 都会和 redux 合并在一起. 所以 api 层也合并在redux 层

export const getLearnedWordCount = () => myAxios.get("learnedWordCount");

export const getTodayLearnedNewWordCount = () =>
  myAxios.get("todayLearnedNewWordCount");

export const getTodayReviewedWordCount = () =>
  myAxios.get("todayReviewedWordCount");

//上述三合一

export const getWordByName = (name: string) =>
  myAxios.get(`getWordByName/${name}`);
