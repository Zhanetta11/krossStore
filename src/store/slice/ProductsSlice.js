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

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: null,
        error: null,
    },
    reducers: {},
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