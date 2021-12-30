import React from 'react'
import './App.css'
import HomePage from './pages/homePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import ShopPage from './pages/shopPage/ShopPage'
import Header from './components/header/Header'
import SignInAndSignUp from './pages/signInAndSignUp/SignInAndSignUp'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInAndSignUp />} />
      </Routes>
    </div>
  )
}

export default App
