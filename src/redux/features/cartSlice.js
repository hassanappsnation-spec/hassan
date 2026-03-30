import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let product, quantity;

      // ✅ handle both payload types
      if (action.payload.product) {
        product = action.payload.product;
        quantity = action.payload.quantity;
      } else {
        product = action.payload;
        quantity = 1;
      }

      const existingItem = state.cartItem.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItem.push({ ...product, quantity });
      }
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;