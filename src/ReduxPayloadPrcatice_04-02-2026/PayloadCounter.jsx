import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount,decrementByAmount } from "./counterSlice";

import React from 'react'

function PayloadCounter() {
    let count = useSelector((state)=>state.counter.value)

    console.log(count)

    let dispatch = useDispatch()
  return (
    <div>
        <h3>Redux Payload Counter</h3>
        <h2>{count}</h2>

        <button onClick={()=>dispatch(incrementByAmount(5))}>+5</button>
             <button onClick={()=>dispatch(decrementByAmount(5))}>-5</button>
    </div>
  )
}

export default PayloadCounter