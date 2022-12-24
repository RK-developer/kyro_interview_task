import {UserStateModel} from "../../models/redux-user";
import {createSlice,PayloadAction} from "@reduxjs/toolkit"

const userState: UserStateModel = {
    isLoggedIn: false,
    isLoading: false,
    isRegisterationSuccess: null,
    isLoginSuccess: null,

}

const myAuthSlice=createSlice({
    name:'userAuth',
    initialState:userState,
    reducers: {
        setUserState(state, action:PayloadAction<UserStateModel>) {
            return {
                ...state,
                ...action.payload
            }
        },
        setIsLoading(state, action:PayloadAction<UserStateModel>) {
            state.isLoading = action.payload.isLoading
        }
    }
});
export const {reducer, actions} = myAuthSlice;
export const {setUserState, setIsLoading} = actions;
export default reducer;