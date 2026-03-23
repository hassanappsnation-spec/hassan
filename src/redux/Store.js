import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/ProductSlice";

export const Store = configureStore({
  reducer: {
    Product: productReducer,
  },
});