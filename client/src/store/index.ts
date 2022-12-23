import {configureStore} from '@reduxjs/toolkit';
import myProfileSlice from "./slices/my-profile-slice";
import userReducer from "./slices/auth-slice";
import messageReducer from "./slices/generic-response-slice";

const store = configureStore(
    {
        reducer: {
            profileData: myProfileSlice.reducer,
            userData: userReducer,
            messageData: messageReducer,
        },
        devTools: process.env.NODE_ENV === 'development'
    }
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;