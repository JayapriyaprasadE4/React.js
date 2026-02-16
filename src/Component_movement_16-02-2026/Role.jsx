function Role({sendRole, username}){
    const chooseRole =(e)=>{
        console.log("Selected Role", e.target.value)

        sendRole(e.target.value)
    }

    return(
        <div>
            <h2>Welcome {username}</h2>
            <h3>Select Role</h3>


            <button value ="Admin" onClick={chooseRole}>Admin</button>
             <button value ="HR" onClick={chooseRole}>HR</button>
            
        </div>
    )
}

export default Role