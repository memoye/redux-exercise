import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    preferredCurrency: 'naira'
}

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        selectNaira: (state) => {
            state.preferredCurrency = 'naira'
        },
        selectDollars: (state) => {
            state.preferredCurrency = 'dollars'
        }
    }
})

export const { selectNaira, selectDollars } = currencySlice.actions

export default currencySlice.reducer