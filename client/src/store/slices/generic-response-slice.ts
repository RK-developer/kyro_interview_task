import { createSlice } from "@reduxjs/toolkit";
interface GenericResponse {
  status?: string | number,
  message?: string,
  errors?: any
}
const initialState = {} as GenericResponse;

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setStatusMessage: (state, action) => {
      return { 
        status: action.payload.status,
        message: action.payload.message,
      };
    },
    clearStatusMessage: () => {
      return {};
    },
    apiErrors: (state, action) => {
      return {
        errorType: action?.payload?.errorType,
        errors: action?.payload?.errors
      }
    }
  },
});

const { reducer, actions } = messageSlice;

export const { setStatusMessage, clearStatusMessage, apiErrors } = actions
export default reducer;