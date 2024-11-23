import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    // add other reducer here
});

export default rootReducer;