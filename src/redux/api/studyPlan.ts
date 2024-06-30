import axios from "axios";
import { getToken } from "../storge";
const baseURL = "http://127.0.0.1:14322/study";

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

export const updateTodayStudyPlan = () => myAxios.get("updateTodayStudyPlan");
