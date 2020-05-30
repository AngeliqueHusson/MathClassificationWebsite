import React, {useState} from "react";
import Tweet from "./Tweet";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function App(){

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const [users, setUser] = useState([
    {name: 'Ed', message: 'Hello there'},
    {name: 'John', message: "I am john snow"},
    {name: 'test', message: "This is a test"}
  ]);

  const increment = () => {
    setCount(count +1)
    setRed(!isRed);
  }

  return(
    <div className="app">
      <h1 className={isRed ? 'red': ""}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      {users.map(user =>(
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  )
}

export default App;