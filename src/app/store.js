import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from '../features/currencySlice'
import cartReducer from '../features/cartSlice'

export const store = configureStore({
    reducer: {
        currency: currencyReducer,
        cart: cartReducer
    }
})