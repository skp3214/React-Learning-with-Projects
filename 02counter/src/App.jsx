import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)

  const removeValue = () => {
    setcounter(counter - 1);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={() => { setcounter(counter + 1) }}>Add Value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )

}

export default App
