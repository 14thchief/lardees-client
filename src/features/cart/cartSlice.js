import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const reducers = {};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers,
});

export default cartSlice.reducer;