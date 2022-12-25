import { setUserState, setIsLoading } from "../slices/auth-slice";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { UserSignUpPayLoad, UserSignInPayLoad } from "../../models/redux-user";
import { signUp, signIn, userAuthVerify } from "../../services/user-profile";
import {
    authStorage,
    constructErrorMessage,
    constructSuccessMessage,
} from "../../utils/common";

export const signUpAction = (
    userSignUpPayload: UserSignUpPayLoad
): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        try {
            dispatch(setIsLoading({ isLoading: true }));
            const response: any = await signUp(userSignUpPayload);
            if (
                response.data.token &&
                response.status === 200 &&
                response.statusText === "OK"
            ) {
                constructSuccessMessage(
                    "User Registration Successfull",
                    dispatch
                );
                dispatch(
                    setUserState({
                        statusCode: response.status,
                        isLoggedIn: false,
                        isRegisterationSuccess: true,
                        isLoading: false,
                    })
                );
            }
        } catch (err: any) {
            constructErrorMessage(err, dispatch);
            dispatch(
                setUserState({
                    statusCode: err.response.status,
                    isLoggedIn: false,
                    isRegisterationSuccess: false,
                    isLoading: false,
                })
            );
        }
    };
};

export const signInAction = (
    userSignInPayload: UserSignInPayLoad
): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        try {
            dispatch(setIsLoading({ isLoading: true }));
            const response: any = await signIn(userSignInPayload);
            authStorage("setItem", response.data.token);
            constructSuccessMessage("Login Successfull", dispatch);
            dispatch(
                setUserState({
                    statusCode: response.data.status,
                    isLoggedIn: true,
                    isLoginSuccess: true,
                    isLoading: false,
                })
            );
        } catch (err: any) {
            constructErrorMessage(err, dispatch);
            dispatch(
                setUserState({
                    statusCode: err.response.status,
                    isLoggedIn: false,
                    isLoginSuccess: false,
                    isLoading: false,
                })
            );
        }
    };
};

export const userAuthVericyAction = (): ThunkAction<
    void,
    RootState,
    unknown,
    AnyAction
> => {
    return async (dispatch, getState) => {
        try {
            const response: any = await userAuthVerify();
            dispatch(
                setUserState({
                    statusCode: response.data.status,
                    isLoggedIn: true,
                    isLoginSuccess: false,
                    isLoading: false,
                })
            );
        } catch (err: any) {
            authStorage("removeItem");
            dispatch(
                setUserState({
                    statusCode: err.response.status,
                    isLoggedIn: false,
                    isLoginSuccess: false,
                    isLoading: false,
                })
            );
        }
    };
};
