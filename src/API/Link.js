import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "http://localhost:2300/",
    headers: {
        "Content-Type": "application/json",
    },
});