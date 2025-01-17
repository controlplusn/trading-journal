import React from 'react'
import ImageSection from './ImageSection'
import LoginForm from './LoginForm'
import backgroundImage from '../../assets/authentication_page_cover.jfif'
import '../../styles/Login/login.css';

const Login = () => {
  return (
    <div className="login-container">
        <LoginForm />
        <ImageSection backgroundImage={backgroundImage} />
    </div>
  )
}

export default Login