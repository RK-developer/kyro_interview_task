import {
    MyProfileModel,
    MyProfileImageModel,
} from "../../models/redux-my-profile";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const myProfileState: MyProfileModel = {
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    phoneNumber: null,
    alternatePhoneNumber: null,
    location: null,
};

const myProfileImageState: MyProfileImageModel = {
    name: null,
    profileId: null,
    url: null,
};

const initialMyProfileState = {
    myProfileState,
    myProfileImageState,
};

const myProfileSlice = createSlice({
    name: "myprofile",
    initialState: initialMyProfileState,
    reducers: {
        setMyProfile(state, action: PayloadAction<MyProfileModel>) {
            state.myProfileState = action.payload;
        },
        setMyProfileImage(state, action: PayloadAction<MyProfileImageModel>) {
            state.myProfileImageState = action.payload;
        },
    },
});

export default myProfileSlice;
