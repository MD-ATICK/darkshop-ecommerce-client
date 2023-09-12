import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../api/api'

export const categoryesFetch = createAsyncThunk('categoryes/categoryesFetch', async () => {
    const { data, status } = await api.get('/home/get-category', { headers: { Authorization: 'access gained!' } })
    return { categoryes: data.categoryes, status }
})


export const productsFetch = createAsyncThunk('products/productsFetch', async () => {
    const { data, status } = await api.get('/home/get-products', { headers: { Authorization: 'access gained!' } })
    const { products, future_products, format_latest_products, format_topRated_products, format_discount_products } = data
    return { status, products, future_products, format_latest_products, format_topRated_products, format_discount_products }
})

const home_reducers = createSlice({
    name: 'home',
    initialState: {
        // category state.
        categoryes: [],
        cate_status: null,
        cate_fetch: false,

        // products state.
        products: [],
        future_products: [],
        format_latest_products: [],
        format_topRated_products: [],
        format_discount_products: [],
        product_status: null,
        product_fetch: false
    },
    reducers: {},
    extraReducers: (builder) => {
        // category fetch.
        builder.addCase(categoryesFetch.pending, (state, action) => {
            state.cate_fetch = false
            state.categoryes = []
            state.cate_status = null
        })
        builder.addCase(categoryesFetch.fulfilled, (state, action) => {
            state.cate_fetch = true
            state.categoryes = action.payload.categoryes
            state.cate_status = action.payload.status
        })

        // products fetch.
        builder.addCase(productsFetch.pending, (state, action) => {
            state.products = []
            state.future_products = []
            state.format_latest_products = []
            state.format_topRated_products = []
            state.format_discount_products = []
            state.product_fetch = false
            state.product_status = null
        })
        builder.addCase(productsFetch.fulfilled, (state, action) => {
            state.products = action.payload.products
            state.future_products = action.payload.future_products
            state.format_latest_products = action.payload.format_latest_products
            state.format_topRated_products = action.payload.format_topRated_products
            state.format_discount_products = action.payload.format_discount_products
            state.product_fetch = true
            state.product_status = action.payload.status
        })
    }
})


export const { } = home_reducers.actions


export default home_reducers.reducer