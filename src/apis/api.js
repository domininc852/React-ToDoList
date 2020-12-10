import axios from 'axios';

const api = axios.create({
    //baseURL: "https://5fd084271f23740016631c09.mockapi.io/api/"
    baseURL: "http://localhost:8080/"
})

export default api;