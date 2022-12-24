import axiosAPi from "axios";
import {UserSignUpPayLoad, UserSignInPayLoad} from "../models/redux-user";
import {MyProfileModel} from "../models/redux-my-profile"

const baseURL = process.env.REACT_APP_API_BASE_URL as string;
const axios = axiosAPi.create({
    baseURL: `${baseURL}`
});

(function () {
    const userAuthToken = localStorage.getItem("userAuthToken");
    if(!userAuthToken) 
        axios.defaults.headers.common.Authorization = null
    else
        axios.defaults.headers.common.Authorization = `Bearer ${userAuthToken}`
}());



export const signUp = async(userSignUpState:UserSignUpPayLoad) => {
    return axios.post (`/user/signup`,{
        ...userSignUpState
    })
}

export const signIn = async(userSignInState:UserSignInPayLoad) => {
    return axios.post (`/user/signin`,{
        ...userSignInState
    })
}

export const updateProfileDetails =async (myProfileState:MyProfileModel) => {
    return axios.put (`/user/profile`)
}

export const getProfileDetails =async () => {
    return axios.get (`/user/profile`)
}

export const getProfileImage =async () => {
    const result = {
        name: 'image 1',
        profileId: '1',
        url: null
    }
    return result;
}