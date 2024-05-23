import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { showCart: false },
  reducers: {
    toggleCartVisibility(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const { toggleCartVisibility } = cartSlice.actions;

export default cartSlice;
