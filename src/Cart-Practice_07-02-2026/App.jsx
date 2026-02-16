import { useSelector,useDispatch } from "react-redux";


import { addItem,removeItem } from "./cartSlice";
import React from 'react'

function App() {

    let dispatch =useDispatch()

    const count = useSelector((state)=>state.cart.count)

    console.log(count)
  return (
    <div>
        <h2>Amazon</h2>
        <h2>Product : WaterBottles</h2>

        <h3>Items in cart : {count}</h3>

        <button onClick={()=>dispatch(addItem())}> Add Item</button>
         <button onClick={()=>dispatch(removeItem())}> Remove Item</button>
    </div>
  )
}

export default App