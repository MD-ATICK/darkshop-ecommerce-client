import { configureStore } from "@reduxjs/toolkit";
import home_reducers from './reducers/HomeReducer'
import auth_reducers from './reducers/AuthReducer'
import wishlist_reducers from './reducers/WishlistReducer'
import cart_reducers from './reducers/CartReducer'
import order_reducers from './reducers/OrderReducer'
import controll_reducers from './reducers/webSmallControlsReducer'
import review_reducers from './reducers/ReviewReducer'
import message_reducers from './reducers/MessageReducer'

export const Store = configureStore({
    reducer: {
        home: home_reducers,
        auth: auth_reducers,
        cart: cart_reducers,
        wishlist: wishlist_reducers,
        order: order_reducers,
        controll: controll_reducers,
        review: review_reducers,
        message: message_reducers,
    }
})