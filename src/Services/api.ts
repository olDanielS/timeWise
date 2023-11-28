import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.100.15.228:5000/api/v1/'
    
})

export default api;