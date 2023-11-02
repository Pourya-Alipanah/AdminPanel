import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const httpService = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
  timeoutErrorMessage: "Request TimeOut",
});

export const httpInterceptedServices = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
  timeoutErrorMessage: "Request TimeOut",
});


httpInterceptedServices.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (err) => Promise.reject(err)
);

httpInterceptedServices.interceptors.response.use(
  (response)=> response,
  async(error) =>{
    if(error.response.status === 401){
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error);
  }
)