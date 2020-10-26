import axiosInstance from "./axiosInstance";

const usersAPI = {
    getUsers: async (pageNumber, isFriend) => (await axiosInstance.get(`/users?page=${pageNumber}&count=45${isFriend ? '&friend=true' : ''}`)).data,
}

export default usersAPI;