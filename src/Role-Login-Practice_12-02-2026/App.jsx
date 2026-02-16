import{useReducer, useEffect} from "react"

import {reducer, initialState} from "./reducer"

import RoleButtons from "./RoleButtons"
import Login from "./Login"

import Profile from "./Profile"

function App(){
    const [state, dispatch]= useReducer(reducer, initialState)

    useEffect(()=>{
        const roles = ["HR", "Employee","Manager","Admin"]

        for(let r of roles){
            const token = localStorage.getItem(r+"Token")
            if(token){
                dispatch({type:"RESTORE",payload:r})
                break;
            }
        }
    },[])

    return(
        <div>
            <h2>Company Portal</h2>
            {!state.role && (<RoleButtons dispatch={dispatch}/>)}

            {state.role && !state.isLoggedIn && (
                <Login
                role={state.role}
                loading={state.loading}
                dispatch={dispatch}
                />
            )}


            {state.role && state.isLoggedIn &&(<Profile
                role={state.role}
                dispatch={dispatch}/>

            )}
        </div>
    )
}
    
    export default App