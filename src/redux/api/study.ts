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

export const getStudyWordPerStage = () =>
  myAxios.get("today_word_per_study_stage");

export const updateAfterStudy = (todayWord: {
  todayNewWord?: Array<any>;
  todayReviewWord?: Array<any>;
}) => myAxios.post("update_after_study", todayWord);

export const getSomeWordCount = () => myAxios.get("countSomeWord");
