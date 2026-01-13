import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import appReducer from "./appSlice";

export const appStore = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: appReducer,
  },
});
