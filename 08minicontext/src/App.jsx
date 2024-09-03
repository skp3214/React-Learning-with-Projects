import React from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
const App = () => {
  return (
    <UserContextProvider>
      <div>
        <h1>React With Chai</h1>
      </div>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App