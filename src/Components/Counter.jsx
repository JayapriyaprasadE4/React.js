import { useState } from "react";

function Counter(){

    let [count, setcount] = useState(0)

    console.log(count)

    function increase(){
        setcount(count+1)
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increase}>Increment</button>
        </div>
    )
    
}

export default Counter;