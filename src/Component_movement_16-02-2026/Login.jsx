import { useState } from "react";

function Login({sendUser}){
    const [name,setName] = useState("")

    const handlechange = (e)=>{
        console.log("Typing:", e.target.value)

        setName(e.target.value)
    } 

    const handleSubmit = (e) =>{
        e.preventDefault()
        sendUser(name)
    }

    return(
        <div>
            <h2>Login Page</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="EnterName" onChange={handlechange} />

                <button type="submit"> Next</button>
            </form>
        </div>
    )
}

export default Login
