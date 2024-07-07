import React, { useState } from 'react';
import './App.css'
import 'tailwindcss/tailwind.css';
import Card from './components/Card';

function App() {
  const [surname, setsurname] = useState("Prajapati")
  return (
    <>
      <div>
        <h1 className='bg-green-400'>Welcome to our website!</h1>
      </div>
      <Card 
      name="Sachin" 
      surname={surname}
      />
      <Card 
      name="Sameer" 
      surname={surname}
      />
    </>
  )
}

export default App
