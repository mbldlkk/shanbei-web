import axios from "axios";
const baseURL = "http://127.0.0.1:14322/auth";


const myAxios = axios.create({
  baseURL,
  timeout: 5000,
});

export const signIn = (userFormData: object) =>
  myAxios.post("/signIn", userFormData);

export const signUp = (userFormData: object) =>
  myAxios.post("/signUp", userFormData);
