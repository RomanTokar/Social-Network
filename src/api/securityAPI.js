import axiosInstance from "./axiosInstance";

const securityAPI = {
    getCaptchaUrl: async () => (await axiosInstance.get('/security/get-captcha-url')).data
}

export default securityAPI;