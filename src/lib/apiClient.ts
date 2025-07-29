import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

export const damdexPublicAPI = setupCache(
  axios.create({
    withCredentials: false,
    baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }),
  {
    ttl: 1000 * 60 * 60,
    debug: console.log,
  }
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cache: { [key: string]: { data: any; expiry: number } } = {};

damdexPublicAPI.interceptors.request.use((request) => {
  if (!request.url) {
    console.log("Request URL is undefined");
    return request;
  }

  // Tambahkan header Cache-Control ke request jika diperlukan
  request.headers["Cache-Control"] = "max-age=3600";
  const cacheKey = request.url;
  const cachedResponse = cache[cacheKey];

  if (cachedResponse && cachedResponse.expiry > Date.now()) {
    // Kembalikan respons dari cache
    return Promise.reject({ cached: true, data: cachedResponse.data });
  }
  return request;
});

// damdexPublicAPI.interceptors.response.use(
//   (response) => {
//     if (!response.config.url) {
//       console.log("response URL is undefined");
//       return response;
//     }

//     const cacheKey = response.config.url;
//     // Simpan ke cache dengan waktu kadaluarsa (misalnya, 1 jam)
//     cache[cacheKey] = {
//       data: response.data,
//       expiry: Date.now() + 3600 * 1000, // Cache selama 1 jam
//     };
//     return response;
//   },
//   (error) => {
//     // Jika error karena cache, kembalikan data cache
//     if (error.cached) {
//       return Promise.resolve({ data: error.data });
//     }
//     return Promise.reject(error);
//   }
// );
