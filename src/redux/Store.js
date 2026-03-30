import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/ProductSlice";
import cartReducer from './features/cartSlice'

export const Store = configureStore({
  reducer: {
    Product: productReducer,
    cart:cartReducer,
  },
});