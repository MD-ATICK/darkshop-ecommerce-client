import { createSlice } from '@reduxjs/toolkit'


const webSmallControll = createSlice({
    name: 'web_small_controlls',
    initialState: {
        searchtext: '',
        cateAry: [],
        ratingAry: [],
        price: '',
        fsearch: '',
        fcategroy: '',
        frating: '',
        fprice: '',
        fknock: true,
        filterbox: false
    },
    reducers: {
        search: (state, action) => {
            state.searchtext = action.payload
        },
        filterboxhanlder: (state => {
            state.filterbox = !state.filterbox
        }),
        fknock_hanlder: (state => {
            state.fknock = !state.fknock
        }),
        searchf: (state, action) => {
            state.fsearch = action.payload
        },
        mainfilter: (state, action) => {
            state.fcategroy = action.payload.category
            state.fprice = action.payload.price
            state.frating = action.payload.rating
        },
        new_cate_ary: (state, action) => {
            state.cateAry = action.payload
        },
        new_rating_ary: (state, action) => {
            state.ratingAry = action.payload
        },
        new_price: (state, action) => {
            state.price = action.payload
        }
    },
    extraReducers: {}
})

export const { search, filterboxhanlder, fknock_hanlder, searchf, mainfilter, new_rating_ary, new_cate_ary, new_price } = webSmallControll.actions


export default webSmallControll.reducer