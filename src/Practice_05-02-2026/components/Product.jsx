import { useDispatch } from "react-redux";

import { addItem, removeItem } from "../redux/cartSlice";

import React from 'react'

function Product() {

    let dispatch = useDispatch()
  return (
    <div>
        <h3>Product : TV </h3>

        <button onClick={()=> dispatch(addItem())}>+1</button>
          <button onClick={()=> dispatch(removeItem())}>-1</button>
    </div>
  )
}

export default Product