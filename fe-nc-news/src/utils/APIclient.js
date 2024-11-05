import axios from "axios";
export const apiClient = axios.create({
  baseURL: "https://be-nc-news-r99v.onrender.com/api",
  timeout: 1000,
});
