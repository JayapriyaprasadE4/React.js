import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
    name : "counter",
    initialState :{
        value:0
    },

    reducers :{
        increment:(state)=> {
            state.value +=1
        },

        decrement:(state)=>{
            state.value -=1
        }

    }
})
export default counterSlice.reducer
export let {increment, decrement}= counterSlice.actions


////Creates CreateSlice 
//slice
//Reducers
//Actions
