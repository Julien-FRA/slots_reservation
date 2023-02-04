import React from 'react'
import InputMail from '../Input/InputMail'
import InputPsw from '../Input/InputPsw'
import InputText from '../Input/InputText'

const LoginForm = () => {
  return (
    <form action="" method="">
      <InputText name="pseudo" placeholder="Enter your pseudo"/>
      <InputMail name="email" placeholder="Enter your @email"/>
      <InputPsw name="password" placeholder="Enter your password"/>
    </form>
  )
}

export default LoginForm