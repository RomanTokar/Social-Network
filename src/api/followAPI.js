import axiosInstance from "./axiosInstance";

const followAPI = {
    toggleFollowUser: async (isFollow, userId) => (await axiosInstance[isFollow ? 'post' : 'delete'](`follow/${userId}`)).data,
    getUserFollowed: async (userId) => (await axiosInstance.get(`follow/${userId}`)).data
}

export default followAPI;