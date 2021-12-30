import { Component } from 'react'
import CustomeButton from '../customButton/CustomButton'
import { SignInWithGoogle } from '../firebase/fireBaseUtils'
import FormInput from '../formInput/FormInput'
import './SignIn.scss'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ email: '', password: '' })
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign In With Email & Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <div className='buttons'>
            <CustomeButton type='submit'>Sign In</CustomeButton>
            <CustomeButton onClick={SignInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomeButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
