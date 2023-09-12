import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../api/api'

export const loginFetch = createAsyncThunk('customer_auth/loginFetch', async (auth_data) => {
    const { data, status } = await api.post('/customer/login', auth_data)
    return { customer: status === 222 ? data.error : data.customer, token: data.token, status }
})

export const registerFetch = createAsyncThunk('customer_auth/registerFetch', async (register_data) => {
    const { data, status } = await api.post('/customer/register', register_data)
    return { customer: status === 222 ? data.error : data.customer, token: data.token, status }
})

export const meFetch = createAsyncThunk('customer_auth/meFetch', async (token) => {
    const { data, status } = await api.get('/customer/me', { headers: { Authorization: `Bearer ${token}` } })
    return { customer: status === 222 ? data.error : data.customer, status }
})

const auth_reducers = createSlice({
    name: 'customer_auth',
    initialState: {
        customer: '',
        token: '',
        status: null,
        fetch: false,
        loading: false
    },
    reducers: {
        logout: (state) => {
            state.customer = ''
            state.status = null
        }
    },
    extraReducers: (builder) => {
        // login
        builder.addCase(loginFetch.pending, (state, action) => {
            state.customer = ''
            state.status = null
            state.fetch = false
            state.loading = true
        })
        builder.addCase(loginFetch.fulfilled, (state, action) => {
            state.status = action.payload.status
            state.customer = action.payload.customer
            state.token = action.payload.token
            state.fetch = true
            state.loading = false
        })

        // register
        builder.addCase(registerFetch.pending, (state, action) => {
            state.customer = ''
            state.status = null
            state.fetch = false
            state.loading = true
        })
        builder.addCase(registerFetch.fulfilled, (state, action) => {
            state.status = action.payload.status
            state.customer = action.payload.customer
            state.token = action.payload.token
            state.fetch = true
            state.loading = false
        })

        // me
        builder.addCase(meFetch.pending, (state, action) => {
            state.customer = ''
            state.status = null
            state.fetch = false
            state.loading = true
        })
        builder.addCase(meFetch.fulfilled, (state, action) => {
            state.customer = action.payload.customer
            state.status = action.payload.status
            state.fetch = true
            state.loading = false
        })


    }
})


export const { logout } = auth_reducers.actions


export default auth_reducers.reducer