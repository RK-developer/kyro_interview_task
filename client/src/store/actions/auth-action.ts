import {setSignUp, setSignIn} from "../slices/auth-slice";
import {AnyAction, ThunkAction} from '@reduxjs/toolkit';
import {RootState} from '../index';
import {UserSignUpModel, UserSignInModel} from "../../models/redux-user";
import {signUp, signIn} from "../../services/user-profile"
import {setStatusMessage, apiErrors} from "../slices/generic-response-slice";
import {API_FORM_FIELD_ERRORS,API_RESPONSE_STATUS_ERRORS} from "../types";

function constructErrorMessage(err:any, dispatch:any) {
    console.log("user action: ",err);
            const message = (err?.response &&
                err?.response.data &&
                err?.response.data.message) ||
              err?.message ||
              err?.toString();

            if(err?.response?.data?.errors) {
                dispatch(apiErrors({
                    errorType: API_FORM_FIELD_ERRORS,
                    errors: err?.response?.data?.errors
                }))
                return false;
            }
            dispatch(setStatusMessage({
                errorType: API_RESPONSE_STATUS_ERRORS,
                status: false,
                message: message
            }));
}

export const signUpAction=(userSignUpPayload: UserSignUpModel):ThunkAction<void, RootState, unknown, AnyAction>=> {
    return async(dispatch, getState) => {
        try {
            const response: any = await signUp(userSignUpPayload);
            dispatch(setStatusMessage({
                status: true,
                message: response?.data?.message
            }));
            dispatch(setSignUp({
                statusCode: response.data.status,
                status: true
            }));
        }catch(err:any) {
            constructErrorMessage(err, dispatch);
        }
    }
}

export const signInAction=(userSignInPayload: UserSignInModel):ThunkAction<void, RootState, unknown, AnyAction>=> {
    return async(dispatch, getState) => {
        try {
            const response: any = await signIn(userSignInPayload);
            console.log("response: ", response);
            dispatch(setStatusMessage({
                status: true,
                message: response?.data?.message
            }));
            dispatch(setSignIn({
                statusCode: response.data.status,
                status: true
            }));
        }catch(err:any) {
            constructErrorMessage(err, dispatch);
        }
    }
}


