import axios from "axios";
import { getToken } from "../storge";
const baseURL = "http://127.0.0.1:14322/user-book";


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

export const getUserBook = () => myAxios.get("");

export const addUserBook = (bookId: number) => myAxios.post("", { bookId });

export const deleteUserBook = (bookId: number) =>
  myAxios.delete("", { params: { bookId } });

export const switchDefaultUserBook = (bookId: number) =>
  myAxios.patch("", { bookId });



export const firstAddUserBook = (bookId: number) =>
  myAxios.post("/first", { bookId });
