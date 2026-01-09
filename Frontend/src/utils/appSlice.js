import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: true,
};

const appSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebar } = appSlice.actions;
export default appSlice.reducer;
