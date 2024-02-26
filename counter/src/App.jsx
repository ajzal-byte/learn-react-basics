import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const addCount = () => setCount(count + 1);
  const subCount = () => setCount(count - 1);

  
  return (
    <div>
      <button disabled={count === 0 ? true : false} onClick={subCount} >-</button>
      <h1>Count: {count} </h1>
      <button onClick={addCount} >+</button>
      <div style={{marginTop: '100px'}}>
        <button onClick={()=> setCount(0)} >Reset</button>
      </div>
    </div>
  )
}

export default App
