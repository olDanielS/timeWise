import axios from "axios";

const api = axios.create({
    baseURL: 'http://172.16.0.148:5000/api/v1/'
})

export default api;