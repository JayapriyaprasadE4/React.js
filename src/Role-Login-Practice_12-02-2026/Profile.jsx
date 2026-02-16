function Profile ({role, dispatch}){
    const handleLogout =()=>{
        localStorage.removeItem(role+"Token")

        dispatch({type:"LOGOUT"})
    }
    return(
        <div>
            <h2>Welcome to {role} Profile Page</h2>

            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default Profile