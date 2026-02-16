// import {useSelector, useDispatch} from "react-redux"
// import PayloadCounter from "./ReduxPayloadPrcatice_04-02-2026/PayloadCounter"



// function App(){
//   let sum = useSelector((state)=> state.sum)



//   let dispatch = useDispatch()

//   console.log(sum)
//   return(
//     <div>
//       <h1>{sum}</h1>

//       <button onClick={()=>dispatch({type: "Inc"})}>Increase</button>
//        <button onClick={()=>dispatch({type: "Dec"})}>Decrease</button>
//     </div>
//   )
  
 
    
  
// }

// export default App

import React from 'react'
// import Counter from "./Toolkit-practice-06-02-2026/Counter"
import A from "./UseEffect_13-02-2026/A"

function App() {
  return (
    
    <div>
    
{/* <      Counter/> */}
      <A/>
  
    </div>
  )
}

export default App

// import { useDispatch, useSelector } from "react-redux";

// import { add, subtact} from './appPractice'
// import Message from "./appPractice/Message";


// function App(){
//   let count = useSelector((state)=>state.counter.value)

//   let dispatch = useDispatch()
//   return(
//     <div>
//       <h3>Practicie</h3>
//       <Message text ="This is props Drilling Example" />
//       <h2>{count}</h2>

//       <button onClick={()=>dispatch(add(1))}> Add1</button>

//        <button onClick={()=>dispatch(subtact(1))}> subract1</button>
//     </div>
//   )
// }

// export default Ap
// 