import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsAPI } from "../../API";


export const fetchGetAllProducts = createAsyncThunk(
    'products/fetchGetAllProducts',
    async (_, { rejectWithValue }) => {
        try {
            const res = await productsAPI.getAllProducts()
            console.log(res.data.products);

            if (res.status !== 200) {
                throw new Error("Server error")
            }
            return res.data.products

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const fetchByProductName = createAsyncThunk(
    'products/fetchByProductName',
    async (name, { rejectWithValue }) => {
        try {
            const res = await productsAPI.getByName(name)
            console.log(res.data.products)

            if (res.status !== 200) {
                throw new Error('Server error. Cannot find cocktail')
            }

            return res?.data?.products
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

// export const fetchByRemoveProducts = createAsyncThunk(
//     'products/fetchByRemoveProducts',

//     async (id, { rejectWithValue, dispatch }) => {
//         try {
//             const res = await axios.delete(``)
//             // console.log(res);

//             if (res.status !== 200) {
//                 throw new Error("Can't delete the product")
//             }

//             dispatch(removeProduct({ id }))

//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// export const fetchByToggleStatus = createAsyncThunk(
//     'products/fetchByToggleStatus',

//     async (id, { rejectWithValue, dispatch, getState }) => {
//         const product = getState().products.products.find(item => item.id === id)
//         try {
//             const res = await axios.patch(``, { inBasket: !product.inBasket })
//             // console.log(res)

//             if (res.status !== 200) {
//                 throw new Error("Can't update the product")
//             }

//             dispatch(toggleInBasket({ id }))

//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: null,
        error: null,
    },
    reducers: {
        // addProduct(state, action) {
        //     state.products.push(action.payload.data)
        // },
        // toggleInBasket(state, action) {
        //     const toggleProduct = state.products.find(el => el.id === action.payload.id)
        //     toggleProduct.inBasket = !toggleProduct.inBasket
        // },
        // removeProduct(state, action) {
        //     state.products = state.products.filter(item => item.id !== action.payload.id)
        // }
    },
    extraReducers: ({ addCase }) => {
        addCase(fetchGetAllProducts.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchGetAllProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        addCase(fetchGetAllProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })


        addCase(fetchByProductName.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchByProductName.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        addCase(fetchByProductName.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

    }

})

export default productsSlice.reducer