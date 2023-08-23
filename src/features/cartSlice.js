import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: {
        items: [],
        numOfItems: 0,
        total: 0
    }
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.cart.items = state.cart.items.concat([action.payload.name])
            state.cart.numOfItems = state.cart.items.length
            state.cart.total = state.cart.total + action.payload.val
        }
    }
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer