import React from 'react'
import TextInput from '../../components/ui/TextInput'
import Button from '../../components/ui/Button'
import '../../styles/Login/login.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    // left side
    <div className="login-form">
      <div className="form-container">
        <h1 className='form-headline'>Welcome Back!</h1>
        <p>Welcome back! Log in to track your progress and keep optimizing your trades.</p>

        <form className='login'>
          <label>Email</label>
          <TextInput type="email" placeholder="Enter your email" />

          <label>Password</label>
          <TextInput type="password" placeholder="Enter your password" />

          <Button type="submit" className="login-btn" text="Login" />

          <p className='signup-link'>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>

        </form>
      </div>
    </div>
  )
}

export default LoginForm