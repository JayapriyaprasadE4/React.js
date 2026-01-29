import User from "./Components/User";
import Counter from "./Components/Counter";
import A from "./Components/Dummy/A";


function App(){
  return(
    <div>
      <h1>Destructing Practice</h1>
      <User name="Jayapriya" age={25}/>
      <Counter/>
      


    </div>
  )
}

export default App