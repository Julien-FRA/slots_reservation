import React from 'react'
import InputMail from '../Input/InputMail'
import InputPsw from '../Input/InputPsw'

const RegisterForm = () => {
  return (
    <form action="" method="" className='d-flex flex-column'>
      <InputMail name="email" placeholder="Enter your @email"/>
      <InputPsw name="password" placeholder="Enter your password"/>
    </form>
  )
}

export default RegisterForm