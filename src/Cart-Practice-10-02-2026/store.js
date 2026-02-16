import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../Cart-Practice-10-02-2026/CartSlice"

export const store = configureStore({
    reducer:{
        cart : cartReducer
    }
})

export default store