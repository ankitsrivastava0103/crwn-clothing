import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'

const Hats = () => {
  return <div>Hats Component</div>
}

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/hats' element={<Hats />} />
      </Routes>
    </div>
  )
}

export default App
