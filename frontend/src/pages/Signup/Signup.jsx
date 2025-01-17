import React from 'react';
import SignupForm from './SignupForm';
import ImageSection from './ImageSection';
import backgroundImage from '../../assets/authentication_page_cover.jfif';
import '../../styles/Signup/signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
        <SignupForm />
        <ImageSection backgroundImage={backgroundImage} />
    </div>
  )
}

export default Signup