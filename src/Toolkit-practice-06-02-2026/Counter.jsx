import React from "react"

import { useSelector, useDispatch } from "react-redux"

import { increment, decrement } from "./features/counter/counterSlice"


let counter = ()=>{
    let count = useSelector((state)=> state.counter.value)

    let dispatch = useDispatch()

    return(
        <div>
        <h2> value: {count}</h2>

        <button onClick={()=>dispatch(increment())}>Increase</button>
            <button onClick={()=>dispatch(decrement())}>Decrease</button>

        
        </div>
    )
}

export default counter