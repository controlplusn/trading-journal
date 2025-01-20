import React from 'react'
import TextInput from '../../components/ui/TextInput'
import Button from '../../components/ui/Button'
import '../../styles/Signup/signup.css';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  return (
    // left side
    <div className="signup-form">
        <div className="form-container">
            <h1 className='form-headline'>Create Account</h1>
            <p>Track, analyze, and optimize your trades—elevate your trading journey today!</p>

            <form className='signup'>
                <label>Email</label>
                <TextInput type="email" placeholder="Enter your email" />

                <label>Password</label>
                <TextInput type="password" placeholder="Enter your password" />

                <Button type="submit" className="signup-btn" text="Sign up" />

                <p className='login-link'>
                  Already have an account? <Link to="/">Login</Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default SignupForm