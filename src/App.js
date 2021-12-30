import { Component } from 'react'
import './App.css'
import HomePage from './pages/homePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import ShopPage from './pages/shopPage/ShopPage'
import Header from './components/header/Header'
import SignInAndSignUp from './pages/signInAndSignUp/SignInAndSignUp'
import { auth } from './components/firebase/fireBaseUtils'

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }

  unSuscribeFromAuth = null

  componentDidMount() {
    this.unSuscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unSuscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInAndSignUp />} />
        </Routes>
      </div>
    )
  }
}

export default App
