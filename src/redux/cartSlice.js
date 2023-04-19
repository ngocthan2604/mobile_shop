import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        carts: [],
    },
    reducers: {
        addCart: (state, action) => {
            state.carts = [...action.payload];
        },
    },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
