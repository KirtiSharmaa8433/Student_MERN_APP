import axios from "axios";

const API = axios.create({
    baseURL: "https://student-mern-app.onrender.com/api"
});

// Attach token automatically
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    req.headers = req.headers || {};
    if (token) {
        req.headers.authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;