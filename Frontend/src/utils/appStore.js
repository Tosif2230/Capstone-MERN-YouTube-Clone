import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./appSlice";

export const appStore = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
