import LoginContainer from '@/components/Login/login-container'
import LoginForm from '@/components/Login/login-form'
import React from 'react'
import nigga from '@/public/nigga_1.jpg'
const LoginPage = () => {
  return (
    <div>
        <LoginContainer image={nigga}>
            <LoginForm/>
        </LoginContainer>
    </div>
  )
}

export default LoginPage