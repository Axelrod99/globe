import axios from "axios";
import Axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const ApiNoAuth = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// export function setToken(config: any, idToken = "") {
//   if (idToken) { // Check if idToken is truthy (not empty string)
//     config.headers = config.headers || {}; // Ensure headers exist
//     config.headers.Authorization = `Bearer ${idToken}`; // Set Authorization directly
//   }
// }

export function setToken(config: any, idToken = "") {
  if (idToken && idToken !== "") {
    config.headers = {
      ...config.headers,
      common: {
        ...config.headers.common,
        Cookie: `SessionID=${idToken}`,
      },
    };
  }
}


// AxiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("sessionId");
//     if (token) {
//       config.headers.Cookie = `SessionID=${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// AxiosInstance.interceptors.response.use(
//   (response) => {
//     // Do something with response data
//     // console.log(response)
//     return response

//   },
//   async (error) => {
//     if (error?.response?.status === 401) {
//       // logout
//         //  handleLogout()
//         console.log("unavailable")
//     } else {
//       return Promise.reject(error)
//     }
//   }
// )

export default AxiosInstance;

export const setAccessToken = (token: string) => {
  setToken(ApiNoAuth.defaults, token);
  localStorage.setItem("sessionId", token);
  // console.log(localStorage);
};

export const handleLogout = () => {
  localStorage.clear();
  window.location.href = "/";
};

