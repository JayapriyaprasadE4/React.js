import { createSlice } from "@reduxjs/toolkit";
// import { removeItem } from "../Practice_05-02-2026/redux/cartSlice";

let cartSlice = createSlice({
    name : "Cart",

    initialState :{
        count :0
    },
    reducers:{
        addItem :(state)=>{
           state.count +=1
        },

        removeItem:(state)=>{
            state.count -=1
        }
    }
})



export let {addItem, removeItem} = cartSlice.actions
export default cartSlice.reducer
