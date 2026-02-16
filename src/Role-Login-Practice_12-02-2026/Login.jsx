function Login({role , loading, dispatch}){
    console.log("Login Clicked")
    const handleLogin = ()=>{
        dispatch({type :"LOGIN START"})

            setTimeout(()=>{
                console.log("storing Token")
                localStorage.setItem(role +" ","logedin")


                dispatch({type:"LOGIN SUCCESS"})

            },1000)
        
    }

    return(
        <div>
            <h3>{role} Login Page</h3>

            <button onClick={handleLogin} disabled={loading}>{loading ? "Loading...":"Login"}</button>
        </div>
    )
}

export default Login