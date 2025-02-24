import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;

     
      if (status === 401 || status === 403 || status === 404 || status === 500) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login"; 
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;
