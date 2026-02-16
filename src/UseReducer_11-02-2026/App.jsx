import { useReducer } from "react";

function App(){
    let initialState = {count :0}
    function reducer(state, action){
        switch(action.type){
            case "Inc":
                return {count: state.count+1}

                case "Dec":
                    return{count:state.count-1}

                    default :
                    return state
        }
    }

    let [state, dispatch] =useReducer(reducer, initialState)

    return(
        <div>
            <h2>UseReducer Practice</h2>
            <h1>{state.count}</h1>

          


            <button onClick={()=>dispatch({type:"Inc"})}>Increase</button>

             <button onClick={()=>dispatch({type:"Dec"})}>Decrease</button>
        </div>
    )
}

export default App