import React from 'react'
import LoggedoutLayout from '../../component/LoggedoutLayout'
import LoginPage from './loginPage'

const Login = () => {
  return (
    <LoggedoutLayout>
        <LoginPage/>
    </LoggedoutLayout>
  )
}

export default Login