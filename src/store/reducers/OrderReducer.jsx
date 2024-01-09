import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../api/api'
import { toast } from 'react-toastify'


const localStorageFormat = () => {
    const stringifyCarts = localStorage.getItem('carts')
    const carts = JSON.parse(stringifyCarts)
    const filtered_carts = carts.filter(c => c.stock === 0)
    localStorage.setItem('carts', JSON.stringify(filtered_carts))
}

export const placeOrderFetch = createAsyncThunk('order/placeOrderFetch', async ({ products, shops, shippingFee, shippingInfo, productsPrice, navigate }) => {

    const token = localStorage.getItem('dsc-token')
    const { data, status } = token && await api.post('/v8/place-order', { products, shops, shippingFee, shippingInfo, productsPrice }, { headers: { Authorization: `Bearer ${token}` } })

    navigate('/payment', {
        state: {
            orderId: data.order._id,
            products,
            price: shippingFee + productsPrice,
        }
    })
    localStorageFormat()
    toast.success('order placed successed.')
    return { order: data.order, status };
})


export const customerOrderFetch = createAsyncThunk('order/customerOrderFetch', async () => {
    const token = localStorage.getItem('dsc-token')
    const { data, status } = await api.get('/v8/customer-orders', { headers: { Authorization: `Bearer ${token}` } })

    return { orders: data.orders, status }
})

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orders: [],
        status: null,
        fetch: false,
        loading: false
    },
    reducers: {
        order_paid: (state, action) => {
            const _id = action.payload
            state.orders.find(o => o._id === _id).order_payment_status = 'paid'
            state.orders = state.orders
        },
        order_cancelled: (state, action) => {
            const _id = action.payload
            state.orders.find(o => o._id === _id).order_delivery_status = 'cancelled'
            state.orders = state.orders
        }
    },
    extraReducers: (builder) => {

        builder.addCase(customerOrderFetch.pending, (state, action) => {
            state.loading = true
            state.fetch = false
            state.status = null
        })
        builder.addCase(customerOrderFetch.fulfilled, (state, action) => {
            state.loading = false
            state.fetch = true
            state.status = action.payload.status
            state.orders = action.payload.orders
        })
        builder.addCase(customerOrderFetch.rejected, (state, action) => {
            state.loading = false
            state.fetch = true
        })


        builder.addCase(placeOrderFetch.pending, (state, action) => {
            state.loading = true
            state.fetch = false
            state.status = null
        })
        builder.addCase(placeOrderFetch.fulfilled, (state, action) => {
            state.loading = false
            state.fetch = true
            state.status = action.payload.status
            state.orders = [...state.orders, action.payload.order]
        })
        builder.addCase(placeOrderFetch.rejected, (state, action) => {
            state.loading = false
            state.fetch = true
        })
    }
})


export const { order_paid, order_cancelled } = orderSlice.actions


export default orderSlice.reducer