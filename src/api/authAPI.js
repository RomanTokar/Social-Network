import axiosInstance from "./axiosInstance";

const authAPI = {
    getAuthData: async () => (await axiosInstance.get('auth/me')).data,
    login: async (formData) => (await axiosInstance.post('auth/login', formData)).data,
    logout: async () => (await axiosInstance.delete('auth/login')).data,
}

export default authAPI;