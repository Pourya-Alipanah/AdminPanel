import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const httpService = axios.create({
    baseURL: BASE_URL
})