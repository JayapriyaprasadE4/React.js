import React, { useEffect , useState} from 'react'
import "./styles.css"

function A() {
    let [users, setUsers] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((res)=>{console.log(res)
            setUsers(res)})
            // setPosts(res)
        // console.log("Good Morning NYBInfotech")

    },[])
  return (
    <div className="container">
        <h2 className='title'>USERS DATA</h2>

        <div className='cardBox'>{users.map((item)=>(
            <div className='card' key={item.id}><h4 className='cardTitle'>{item.name}</h4>
            <p className='cardBody'>{item.email}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            </div>
        ))}</div>

    </div>
  )
}

export default A