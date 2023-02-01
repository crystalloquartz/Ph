import axios from 'axios';


const instance = axios.create({
    baseURL: process.env.REACT_APP_API || "http://localhost:5000"
});

export default instance;