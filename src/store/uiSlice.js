import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showCart: false, notification: null },
  reducers: {
    toggleCartVisibility(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.title,
      };
    },
  },
});

export const { toggleCartVisibility, showNotification } = uiSlice.actions;

export default uiSlice;
