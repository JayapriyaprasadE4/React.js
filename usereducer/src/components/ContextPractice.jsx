import { createContext, useContext, useState } from "react";


let MyContext = createContext()

function ContextPractice(){
    let [value,setValue] = useState(10)

    return(
        <MyContext.Provider value ={value}> <h2>This is parent component</h2> 
        
        <button onClick={()=> setValue(20)}>click</button>
        <A/>
        </MyContext.Provider>
           )
        }


        function A(){
            let data = useContext(MyContext)

            return <h3>This is value from A {data}</h3>
        }

        export default ContextPractice
