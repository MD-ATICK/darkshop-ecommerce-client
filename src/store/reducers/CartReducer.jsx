import { createSlice } from '@reduxjs/toolkit'


const cart_slice = createSlice({
    name: 'cart',
    initialState: {
        carts: [],
        worked: false,
        undo_cart: '',
    },
    reducers: {
        get_cart: (state, action) => {
            const stringifycarts = localStorage.getItem('carts')
            if (stringifycarts) {
                const parseit = JSON.parse(stringifycarts)
                state.carts = parseit
            }
            state.worked = true
        },
        add_cart: (state, action) => {
            localStorage.setItem('carts', JSON.stringify([...state.carts, { ...action.payload, quantity: 1 }]))
            state.carts = [...state.carts, { ...action.payload, quantity: 1 }]
        },
        delete_cart: (state, action) => {
            const will_delete_id = action.payload
            state.carts = state.carts.filter(w => w._id !== will_delete_id)
            localStorage.setItem('carts', JSON.stringify(state.carts))
        },
        increment_quantity: (state, action) => {
            const id = action.payload
            if (state.carts.find(c => c._id === id).quantity < 6) {
                state.carts.find(c => c._id === id).quantity += 1
                localStorage.setItem('carts', JSON.stringify(state.carts))
            }
        },
        decrement_quantity: (state, action) => {
            const id = action.payload
            if (state.carts.find(c => c._id === id).quantity > 1) {
                state.carts.find(c => c._id === id).quantity -= 1
                localStorage.setItem('carts', JSON.stringify(state.carts))
            }
        }
    }
})

export const { add_cart, get_cart, delete_cart, increment_quantity, decrement_quantity } = cart_slice.actions;

export default cart_slice.reducer;