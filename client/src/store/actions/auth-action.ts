import {setUserState, setIsLoading} from "../slices/auth-slice";
import {AnyAction, ThunkAction} from '@reduxjs/toolkit';
import {RootState} from '../index';
import {UserSignUpPayLoad, UserSignInPayLoad} from "../../models/redux-user";
import {signUp, signIn} from "../../services/user-profile"
import {setStatusMessage, apiErrors} from "../slices/generic-response-slice";
import {API_FORM_FIELD_ERRORS,API_RESPONSE_STATUS_ERRORS,SUCCESS,FAILED} from "../types";

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
                message: {
                    type: FAILED,
                    msg: message
                }
            }));
}

function constructSuccessMessage(msg:any, dispatch:any) {
    dispatch(setStatusMessage({
        message: {
            type: SUCCESS,
            msg
        }
    }));
}
export const signUpAction=(userSignUpPayload: UserSignUpPayLoad):ThunkAction<void, RootState, unknown, AnyAction>=> {
    return async(dispatch, getState) => {
        try {
            dispatch(setIsLoading({isLoading: true}));
            const response: any = await signUp(userSignUpPayload);
            if(response.data.token && response.status === 200 && response.statusText === "OK") {
                constructSuccessMessage("User Registration Successfull", dispatch);
                dispatch(setUserState({
                    statusCode: response.status,
                    isLoggedIn: false,
                    isRegisterationSuccess: true,
                    isLoading: false
                }));
            }
        }catch(err:any) {
            constructErrorMessage(err, dispatch);
            dispatch(setUserState({
                statusCode: err.response.status,
                isLoggedIn: false,
                isRegisterationSuccess: false,
                isLoading: false
            }));
        }
    }
}

export const signInAction=(userSignInPayload: UserSignInPayLoad):ThunkAction<void, RootState, unknown, AnyAction>=> {
    return async(dispatch, getState) => {
        try {
            dispatch(setIsLoading({isLoading: true}));
            const response: any = await signIn(userSignInPayload);
            console.log("response: ", response);
            localStorage.setItem("userAuthToken", response.data.token);
            constructSuccessMessage("Login Successfull",dispatch);
            dispatch(setUserState({
                statusCode: response.data.status,
                isLoggedIn: true,
                isLoginSuccess: true,
                isLoading: false
            }));
        }catch(err:any) {
            constructErrorMessage(err, dispatch);
            dispatch(setUserState({
                statusCode: err.response.status,
                isLoggedIn: false,
                isLoginSuccess: false,
                isLoading: false
            }));
        }
    }
}


