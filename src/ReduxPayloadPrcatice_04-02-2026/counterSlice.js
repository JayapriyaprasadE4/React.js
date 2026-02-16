import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
    name : "counter",
    initialState :{
        value:0
    },

    reducers:{
        incrementByAmount : (state,action)=>{
            state.value+=action.payload
        },

        decrementByAmount : (state,action)=>{
            state.value -= action.payload
        }
    }
})

export let {incrementByAmount, decrementByAmount}= counterSlice.actions

export default counterSlice.reducer