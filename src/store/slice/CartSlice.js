import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalPrice: 0,
        tax: 0,
    },
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...product, quantity: 1 });
            }

            state.totalPrice = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
            state.tax = state.totalPrice * 0.05;
        },
        removeFromCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload);

            if (itemIndex !== -1) {
                if (state.cartItems[itemIndex].quantity > 1) {
                    state.cartItems[itemIndex].quantity -= 1; 
                } else {
                    state.cartItems.splice(itemIndex, 1); 
                }
            }

            state.totalPrice = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
            state.tax = state.totalPrice * 0.05;
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;