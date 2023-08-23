import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    items: [],
    numOfItems: 0,
    total: 0

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items = state.items.concat([action.payload.name])
            state.numOfItems = state.items.length
            state.total = state.total + action.payload.val
        }
    }
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer