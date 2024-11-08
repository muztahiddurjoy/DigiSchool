import LoginContainer from '@/components/Login/login-container'
import React from 'react'
import student from '@/public/register_bg.jpg'
import RegisterFormContainer from '@/components/Register/register-form-container'
const RegisterPage = () => {
  return (
    <div>
        <LoginContainer image={student}>
            <RegisterFormContainer/>
        </LoginContainer>
    </div>
  )
}

export default RegisterPage