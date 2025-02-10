import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slice/ProductsSlice"


const store = configureStore({
    reducer: {
        products: productsSlice,
    }
})

export default store