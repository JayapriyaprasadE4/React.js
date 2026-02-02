import { createContext,useState } from "react"
import Function from "./Function"
import Display from "./Display"

 export let UserContext = createContext()

function ContextPractice2() {
   let [name, setname] =  useState("Jayapriya")

    let [age, setAge]= useState(25)

 
  return (

    <UserContext.Provider value ={{name, age}}>
        <h2>Parent component</h2>

        <button onClick={()=>setname("React Learner")}>changeName</button>
    <Display/>
    <Function/>
    </UserContext.Provider>

  )
}



export default ContextPractice2