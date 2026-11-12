import axios from 'axios';

const api = axios.create({
    baseURL: "https://assignment-14crm-application-backen.vercel.app"
})
export default api;