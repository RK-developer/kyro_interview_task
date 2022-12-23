import myProfileSlice from "../slices/my-profile-slice";
import {AnyAction, ThunkAction} from '@reduxjs/toolkit';
import {RootState} from '../index';
import {MyProfileModel, MyProfileImageModel} from "../../models/redux-my-profile";
import {updateProfileDetails, getProfileDetails, getProfileImage} from "../../services/user-profile"
import {setStatusMessage} from "../slices/generic-response-slice";

export const myProfileActions = myProfileSlice.actions;

export const getProfileDetailsByUserId=():ThunkAction<void, RootState, unknown, AnyAction>=> {
    return async(dispatch, getState) => {
        try {
            const response:any = await getProfileDetails();
            dispatch(myProfileActions.setMyProfile(response));
        }catch(err:any) {
            const message = (err?.response &&
                err?.response.data &&
                err?.response.data.message) ||
              err?.message ||
              err?.toString();
            dispatch(setStatusMessage({
                status: false,
                message: message
            }));
        }
    }
}

export const updateProfileDetailsByUserId=(profilePayload:MyProfileModel):ThunkAction<void, RootState, unknown, AnyAction>=> {
    return async(dispatch, getState) => {
        try {
            const response:any = await updateProfileDetails(profilePayload);
            dispatch(myProfileActions.setMyProfile(response));
        }catch(err:any) {
            const message = (err?.response &&
                err?.response.data &&
                err?.response.data.message) ||
              err?.message ||
              err?.toString();
            dispatch(setStatusMessage({
                status: false,
                message: message
            }));
        }
    }
}

export const getProfileIamge=():ThunkAction<void, RootState, unknown, AnyAction>=> {
    return async(dispatch, getState) => {
        const response: MyProfileImageModel = await getProfileImage();
        dispatch(myProfileActions.setMyProfileImage(response));
    }
}


