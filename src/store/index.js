import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slice/ProductsSlice"
import cartReducer from "./slice/CartSlice"


const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartReducer,
    }
})

export default store