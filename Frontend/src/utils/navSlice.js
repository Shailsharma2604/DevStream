import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    isMenuOpen: true,
    showFilterList: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    hideFilterList: (state) => {
      state.showFilterList = true;
    },
  },
});

export const { toggleMenu, closeMenu, hideFilterList } = navSlice.actions;
export default navSlice.reducer;
//navigation state whether menu is open