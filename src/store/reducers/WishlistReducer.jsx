import { createSlice } from '@reduxjs/toolkit'


const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlists: [],
        undo_wishlist: '',
        screenShowOnly: false, // just added for plm in wishlish slide.
    },
    reducers: {
        changeScreenShow: (state, action) => {
            state.screenShowOnly = action.payload
        },
        get_wishlist: (state, action) => {
            const stringifyWishlists = localStorage.getItem('wishlists')
            if (stringifyWishlists) {
                const parseit = JSON.parse(stringifyWishlists)
                state.wishlists = parseit
            }
        },
        add_wishlist: (state, action) => {
            localStorage.setItem('wishlists', JSON.stringify([...state.wishlists, action.payload]))
            state.wishlists = [...state.wishlists, action.payload]
        },
        delete_wishlist: (state, action) => {
            const will_delete_id = action.payload
            state.wishlists = state.wishlists.filter(w => w._id !== will_delete_id)
            localStorage.setItem('wishlists', JSON.stringify(state.wishlists))
        }
    }
})

export const { changeScreenShow, add_wishlist, get_wishlist, delete_wishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;