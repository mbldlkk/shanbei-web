import axios from "axios";
const baseURL = "http://127.0.0.1:14322/book";


const myAxios = axios.create({
  baseURL,
  timeout: 5000,
});

export const getBookByTag = (tag: string) => myAxios.get(tag);
