import axiosAPi from "axios";
import {UserSignUpModel, UserSignInModel} from "../models/redux-user";
import {MyProfileModel} from "../models/redux-my-profile"

const baseURL = process.env.REACT_APP_API_BASE_URL as string;
const axios = axiosAPi.create({
    baseURL: `${baseURL}`
});

(function () {
    const authToken = localStorage.getItem("authToken");
    if(!authToken) 
        axios.defaults.headers.common.Authorization = null
    else
        axios.defaults.headers.common.Authorization = `Bearer ${authToken}`
}());



export const signUp = async(userSignUpState:UserSignUpModel) => {
    return axios.post (`/user/signup`,{
        ...userSignUpState
    })
}

export const signIn = async(userSignInState:UserSignInModel) => {
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