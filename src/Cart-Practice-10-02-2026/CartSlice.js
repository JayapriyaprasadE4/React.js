import { createSlice } from "@reduxjs/toolkit";
// import { addItem } from "../Cart-Practice_07-02-2026/cartSlice";

let cartSlice = createSlice({
    name : "cart",

    initialState :{
        quantity :0
    },

    reducers:{
        addItem:(state)=>{
            state.quantity +=1
        },

        removeItem:(state)=>{
            console.log(state.quantity)
            if(state.quantity > 0){
                 state.quantity -=1
            }
        }
    }
})

export const {addItem, removeItem} = cartSlice.actions

export default cartSlice.reducer