import axios from "axios";

export const damdexPublicAPI = axios.create({
  withCredentials: false,
  baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

damdexPublicAPI.interceptors.request.use((request) => {
  console.log(`user => ${request.method} | ${request.url}`);
  return request;
});
