import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/ProductSlice";
import cartReducer from "./features/cartSlice";
import authReducer from "./features/loginSlice"
export const store = configureStore({
  reducer: {
    product: productReducer,   // lowercase key!
    cart: cartReducer,
       auth: authReducer
  },
});