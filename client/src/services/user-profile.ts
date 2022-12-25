import axiosAPi from "axios";
import { UserSignUpPayLoad, UserSignInPayLoad } from "../models/redux-user";
import { MyProfileModel } from "../models/redux-my-profile";
import { BASE_API_URL } from "../utils/config";

const baseURL = BASE_API_URL();
const axios = axiosAPi.create({
    baseURL: `${baseURL}api/v1`,
});

axios.interceptors.request.use(function (config: any) {
    const userAuthToken = localStorage.getItem("userAuthToken");
    config.headers.token = userAuthToken;
    return config;
});

export const signUp = async (userSignUpState: UserSignUpPayLoad) => {
    return axios.post(`/user/signup`, {
        ...userSignUpState,
    });
};

export const signIn = async (userSignInState: UserSignInPayLoad) => {
    return axios.post(`/user/signin`, {
        ...userSignInState,
    });
};

export const updateProfileDetails = async (myProfileState: MyProfileModel) => {
    return axios.put(`/user/profile`, {
        ...myProfileState,
    });
};

export const getProfileDetails = async () => {
    return axios.get(`/user/profile`);
};

export const getProfileImage = async () => {
    const result = {
        name: "image 1",
        profileId: "1",
        url: null,
    };
    return result;
};

export const userAuthVerify = async () => {
    return axios.get("user/auth-verify");
};
