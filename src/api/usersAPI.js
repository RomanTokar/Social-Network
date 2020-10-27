import axiosInstance from "./axiosInstance";

const usersAPI = {
    getUsers: async (pageNumber, isFriend, term) => (await axiosInstance.get(`/users?page=${pageNumber}&term=${term}&count=45${isFriend ? '&friend=true' : ''}`)).data,
}

export default usersAPI;