import React from 'react'
import './App.css'
import HomePage from './pages/homePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import ShopPage from './pages/shopPage/ShopPage'
import Header from './components/header/Header'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  )
}

export default App
