import {UserSignUpModel, UserSignInModel} from "../../models/redux-user";
import {createSlice,PayloadAction} from "@reduxjs/toolkit"

const userSignUpState: UserSignUpModel = {
    statusCode: "",
    status: false
}

const userSignInState: UserSignInModel = {
    statusCode: "",
    status: false
}

const initialUserState = {
    userSignUpState,
    userSignInState
}

const myAuthSlice=createSlice({
    name:'userAuth',
    initialState:initialUserState,
    reducers: {
        setSignUp(state, action:PayloadAction<UserSignUpModel>) {
            state.userSignUpState = action.payload
        },
        setSignIn(state, action:PayloadAction<UserSignInModel>) {
            state.userSignInState = action.payload
        }
    }
});
export const {reducer, actions} = myAuthSlice;
export const {setSignUp, setSignIn} = actions;
export default reducer;