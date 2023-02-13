import React from 'react'
import BtnSubmit from '../Button/BtnSubmit'
import InputMail from '../Input/InputMail'
import InputPsw from '../Input/InputPsw'
import InputText from '../Input/InputText'

const LoginForm = () => {
  return (
    <form action="" method="" className='d-flex flex-column mx-2 my-2'>
      <InputText name="pseudo" placeholder="Enter your pseudo"/>
      <InputMail name="email" placeholder="Enter your @email"/>
      <InputPsw name="password" placeholder="Enter your password"/>
      <BtnSubmit variant='dark' value='login' placeholder='Envoyer' />
    </form>
  )
}

export default LoginForm