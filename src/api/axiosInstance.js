import * as axios from "axios";

let axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9fceb43c-94d9-4cab-baff-e3d86c0491c5',
    }
})

export default axiosInstance;