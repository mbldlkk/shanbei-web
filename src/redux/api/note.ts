import axios from "axios";
import { getToken } from "../storge";
const baseURL = "http://127.0.0.1:14322/note";


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

export const getNoteByWordId = (wordId: string) =>
  myAxios.get(`get-by-wordId/${wordId}`);
// 返回两个东西 一个用户自己的默认笔记, 一个是 全部的笔记

export const createNote = (wordId: string, content: string) =>
  myAxios.post(`create-by-wordId/${wordId}`, { content });

export const findMyNote = () => myAxios.get("get-by-userId");
