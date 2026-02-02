import  { useContext } from 'react'
import { UserContext} from "./ContextPractice2"

function Display() {
    let data = useContext(UserContext)

  return (
    <div>
        <h3>Name : {data.name}</h3>
        <h3>Age : {data.age}</h3>
    </div>
  )
}

export default Display