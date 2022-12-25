import myProfileSlice from "../slices/my-profile-slice";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import {
    MyProfileModel,
    MyProfileImageModel,
} from "../../models/redux-my-profile";
import {
    updateProfileDetails,
    getProfileDetails,
    getProfileImage,
} from "../../services/user-profile";
import { setStatusMessage } from "../slices/generic-response-slice";
import {
    constructErrorMessage,
    constructSuccessMessage,
} from "../../utils/common";

export const myProfileActions = myProfileSlice.actions;

export const getProfileDetailsByUserId = (): ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
> => {
    return async (dispatch, getState) => {
        try {
            const response: any = await getProfileDetails();
            dispatch(myProfileActions.setMyProfile(response.data));
        } catch (err: any) {
            constructErrorMessage(err, dispatch);
        }
    };
};

export const updateProfileDetailsByUserId = (
    profilePayload: MyProfileModel
): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        try {
            const response: any = await updateProfileDetails(profilePayload);
            console.log("profile:", response.data);
            constructSuccessMessage("Profile Updated Successfull", dispatch);
            dispatch(myProfileActions.setMyProfile(response.data));
        } catch (err: any) {
            constructErrorMessage(err, dispatch);
        }
    };
};

export const getProfileIamge = (): ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
> => {
    return async (dispatch, getState) => {
        const response: MyProfileImageModel = await getProfileImage();
        dispatch(myProfileActions.setMyProfileImage(response));
    };
};
