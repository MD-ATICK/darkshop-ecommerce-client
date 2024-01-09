import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../api/api'

export const loginFetch = createAsyncThunk('customer_auth/loginFetch', async (auth_data) => {
    const { data, status } = await api.post('/v9/login', auth_data)
    return { data, status }
})

export const registerFetch = createAsyncThunk('customer_auth/registerFetch', async (register_data) => {
    const { data, status } = await api.post('/v9/register', register_data)
    return { data, status }
})

export const meFetch = createAsyncThunk('customer_auth/meFetch', async (token) => {
    const { data, status } = await api.get('/v9/me', { headers: { Authorization: `Bearer ${token}` } })
    return { data, status }
})

const auth_reducers = createSlice({
    name: 'customer_auth',
    initialState: {
        customer: '',
        token: '',
        status: null,
        fetch: false,
        loading: false,
        error: ''
    },
    reducers: {
        logout: (state) => {
            state.customer = ''
            state.status = null
        },
        change_avatar: (state, action) => {
            state.customer.avatar = action.payload
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
            state.token = action.payload.status === 201 ? action.payload.data.token : ''
            state.fetch = true
            state.loading = false
            action.payload.status === 201 ? state.customer = action.payload.data.customer : state.error = action.payload.data.error
        })
        builder.addCase(loginFetch.rejected, (state, action) => {
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
            state.token = action.payload.status === 201 ? action.payload.data.token : ''
            state.fetch = true
            state.loading = false
            action.payload.status === 201 ? state.customer = action.payload.data.customer : state.error = action.payload.data.error
        })

        // me
        builder.addCase(meFetch.pending, (state, action) => {
            state.customer = ''
            state.status = null
            state.fetch = false
            state.loading = true
        })
        builder.addCase(meFetch.fulfilled, (state, action) => {
            state.status = action.payload.status
            state.fetch = true
            state.loading = false
            if (action.payload.status === 200) {
                state.customer = action.payload.data.customer
            } else if (action.payload.status === 222) {
                state.error = action.payload.data.error
            }
        })
        builder.addCase(meFetch.rejected, (state, action) => {
            state.fetch = true
            state.loading = false
        })


    }
})


export const { logout, change_avatar } = auth_reducers.actions


export default auth_reducers.reducer