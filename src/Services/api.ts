import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.100.15.226:5000/api/v1/'
})

export default api;