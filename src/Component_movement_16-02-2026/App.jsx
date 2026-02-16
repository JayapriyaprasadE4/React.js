import { useState } from "react";
import Login from "./Login.jsx"
import Role from "./Role.jsx"
import Profile from "./Profile.jsx";


function App(){
    const[user, setUser]= useState("")

    const[role, setRole] = useState("")

    return(
         <div>
            {!user&& <Login sendUser= {setUser}/>}
            {user && !role  && <Role sendRole={setRole} username={user}/> }

            {user  && role  && <Profile username={user} role={role}/>}

            
        </div>
    )
}

export default App



// function App(){
//     return(
//         <div>  <h1>Working</h1></div>
  
//     )
// }


// export default App