import { useReducer } from "react";

let initialState = {message: "Good Morning Team"}

import React from 'react'

 function reducer(state, action) {
    if(action.type==="change"){
        return {message : "Welcome to NyBInfotech"}
    }

  return state
}
function BasicReducer(){
    let [state, dispach] = useReducer(reducer, initialState)

    return(
        <div>
            <h2>{state.message}</h2>

            <button onClick={()=>dispach({type : "change"})}> change Message</button>
        </div>
    )
}

export default BasicReducer