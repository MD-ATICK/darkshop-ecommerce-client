import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { toast } from "react-toastify";

export const getAllMessages = createAsyncThunk('message/getAllMessages', async (chatid) => {
    const token = localStorage.getItem('dsc-token')
    const { data, status } = await api.get(`/v7/message/one-chat-all-messages/${chatid}`, { headers: { Authorization: `Bearer ${token}` } })
    if (status === 200) {
        console.log('now attend', data)
        return data.messages
    }
})

export const getAllChats = createAsyncThunk('message/getAllChats', async () => {
    const token = localStorage.getItem('dsc-token')
    const { data, status } = await api.get('/v6/chat/one-customer-all-chats?person=customer', { headers: { Authorization: `Bearer ${token}` } })
    if (status === 200) {
        console.log(data)
        return data.chats;
    }
})


const messageSlice = createSlice({
    name: 'message',
    initialState: {
        nijer_chats: '',
        chatFetch: false,
        chatMessages: [],
        fetch: false,
        latestMessage: ''
    },
    reducers: {
        load_reducer: (state, action) => {
            state.fetch = action.payload === 'false' ? false : true
        },
        new_message: (state, action) => {
            state.chatMessages = [...state.chatMessages, action.payload]
            state.latestMessage = action.payload
        },
        correct_id: (state, action) => {
            state.chatMessages.find(cm => cm._id === action.payload.oId)._id = action.payload.nId
            state.chatMessages = state.chatMessages
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllMessages.pending, (state, action) => {
            state.fetch = false
            state.chatMessages = []
        })
        builder.addCase(getAllMessages.fulfilled, (state, action) => {
            state.fetch = true
            state.chatMessages = action.payload
        })


        builder.addCase(getAllChats.pending, (state, action) => {
            state.chatFetch = false
            state.nijer_chats = []
        })
        builder.addCase(getAllChats.fulfilled, (state, action) => {
            state.chatFetch = true
            state.nijer_chats = action.payload
        })
    }
})

export const { load_reducer, new_message, correct_id } = messageSlice.actions
export default messageSlice.reducer