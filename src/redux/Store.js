import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/ProductSlice";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,   // lowercase key!
    cart: cartReducer,
  },
});