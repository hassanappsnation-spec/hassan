// redux/features/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { product, quantity } = action.payload;
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
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;