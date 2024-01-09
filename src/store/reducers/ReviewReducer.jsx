import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import api from '../../api/api'


export const reviewFetch = createAsyncThunk('review/reviewFetch', async (fpid) => {
    const { data, status } = await api.get(`/v5/review/get/${fpid}`, { headers: { Authorization: 'acccess gained' } })
    if (status === 200) {
        return data.prodReviews
    } else {
        toast.error('error held in reviews')
    }
})


const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        prodReviews: ''
    },
    reducers: {
        add_review: (state, action) => {
            state.prodReviews = [...state.prodReviews, action.payload]
        },
        update_review: (state, action) => {
            const { rating, content, images, _id } = action.payload
            let f = state.prodReviews
            let p = f.find(pr => pr._id === _id)
            p.rating = rating
            p.content = content
            p.images = images
            state.prodReviews = f
        },
        delete_review: (state, action) => {
            const _id = action.payload
            const f = state.prodReviews.filter(pr => pr._id !== _id)
            state.prodReviews = f;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(reviewFetch.fulfilled, (state, action) => {
            state.prodReviews = action.payload
        })
    }
})

export const { add_review, update_review, delete_review } = reviewSlice.actions


export default reviewSlice.reducer