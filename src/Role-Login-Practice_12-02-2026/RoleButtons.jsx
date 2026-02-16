function RoleButtons({dispatch}){
    return(
        <div>
            <h3>Select Role</h3>

            <button onClick={()=>dispatch({type:"SELECT ROLE",payload:"HR"})}>HR</button>
             <button onClick={()=>dispatch({type:"SELECT ROLE",payload:"Employee"})}>Employee</button>
              <button onClick={()=>dispatch({type:"SELECT ROLE",payload:"Manager"})}>Manager</button>
               <button onClick={()=>dispatch({type:"SELECT ROLE",payload:"Admin"})}>Admin</button>

               {/* <button style={btnStyle} onClick={()=>dispatch({type : "SELECT ROLE" ,payload:"Admin"})}> Admin</button> */}
        </div>
    )
}

export default RoleButtons