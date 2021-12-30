import React from 'react'
import './App.css'
import HomePage from './pages/homePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import ShopPage from './pages/shopPage/ShopPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  )
}

export default App
