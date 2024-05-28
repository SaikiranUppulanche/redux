import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [], totalItems: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    replaceData(state, action) {
      state.cartItems = action.payload.cartItems;
      state.totalItems = action.payload.totalItems;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      state.totalItems++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalItems--;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const { replaceData, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice;
