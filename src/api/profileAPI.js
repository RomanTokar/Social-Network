import axiosInstance from "./axiosInstance";

const profileAPI = {
    getProfile: async (userId) => (await axiosInstance.get(`profile/${userId}`)).data,
    getStatus: async (userId) => (await axiosInstance.get(`profile/status/${userId}`)).data,
    updateStatus: async (status) => (await axiosInstance.put('profile/status', {status})).data,
    updatePhoto: async (file) => {
        const formData = new FormData();
        formData.append('image', file)
        return (await axiosInstance.put('profile/photo', formData)).data
    },
    updateProfile: async (formData) => (await axiosInstance.put('profile', formData)).data
}

export default profileAPI;