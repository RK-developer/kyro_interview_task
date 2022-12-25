import {
    apiErrors,
    setStatusMessage,
} from "../store/slices/generic-response-slice";
import {setUserState} from "../store/slices/auth-slice"
import {
    API_FORM_FIELD_ERRORS,
    API_RESPONSE_STATUS_ERRORS,
    FAILED,
    SUCCESS,
} from "../store/types";

export const authStorage = function(type:string,value?:string) {
    const token = "userAuthToken";
    const arr = ["removeItem","getItem"];
    if(type === "setItem" && value) {
        return localStorage[type](token,value)
    }
    if(arr.includes(type)) {
        return localStorage[type](token)
    }
}

export const constructErrorMessage = (err: any, dispatch: any) => {
    const message =
        (err?.response && err?.response?.data && err?.response?.data?.message) ||
        err?.message ||
        err?.toString();

    if(err?.response?.data?.isAuthCheck === false) {
        authStorage("removeItem");
        dispatch(setUserState({
            isLoggedIn: false,
        }))
    }

    if (err?.response?.data?.errors) {
        dispatch(
            apiErrors({
                errorType: API_FORM_FIELD_ERRORS,
                errors: err?.response?.data?.errors,
            })
        );
        return false;
    }
    dispatch(
        setStatusMessage({
            errorType: API_RESPONSE_STATUS_ERRORS,
            message: {
                type: FAILED,
                msg: message,
            },
        })
    );
};

export const constructSuccessMessage = (msg: any, dispatch: any) => {
    dispatch(
        setStatusMessage({
            message: {
                type: SUCCESS,
                msg,
            },
        })
    );
};

export const getCurrentDateWithDefineFormat = () => {
    const currentDate = new Date();
    const startSlice = 1;
    const endSlice = 4
    const splitIntoDateList = currentDate?.toDateString().split(" ");
    const validDateFormat = splitIntoDateList?.slice(startSlice,endSlice)?.join(" ");
    return validDateFormat;
}

export const logout = (dispatch:any) => {
    authStorage("removeItem");
    dispatch(setUserState({
        isLoggedIn: false,
    }))
}