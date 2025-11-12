import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleIncrement(){
    setCount(count + 1);
  }

  function handleDecrement(){
    setCount(count - 1);
  }

  function handleReset(){
    setCount(0);
  }
  return (
    <>
    <p> {count}</p>
    <button onClick={handleIncrement}>
      Increment 
    </button>
    <button onClick={handleDecrement}>
      Decrement 
    </button>
    <button onClick={handleReset}>
      Reset
    </button>
    </>
  )

}

export default App
