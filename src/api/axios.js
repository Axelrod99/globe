import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default AxiosInstance;

export const ApiNoAuth = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export function setToken(config, idToken = "") {
  if (idToken && idToken !== "") {
    config.headers = {
      ...config.headers,
      common: {
        ...config.headers.common,
        Authorization: `Bearer ${idToken}`,
      },
    };
  }
}

export const setAccessToken = (token) => {
  setToken(ApiNoAuth.defaults, token);
  localStorage.setItem("sessionId", token);
  console.log(localStorage);
};

export const handleLogout = () => {
  localStorage.clear();
  window.location.href = "/";
};
