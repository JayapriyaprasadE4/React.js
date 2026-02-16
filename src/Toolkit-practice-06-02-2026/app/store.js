import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice"


export let store = configureStore({
    reducer :{
        counter : counterReducer
    }
})


////Here combine all slices , creates global store , counter becomes a key in sate