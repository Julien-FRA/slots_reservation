import React from 'react'

interface InputMailProps {
  name?: string;
  placeholder?: string;
}

const InputMail = ({name, placeholder}: InputMailProps) => {
  return (
    <div className="d-flex flex-column input-group mx-2 my-2">
      <input type="email" name={name} className="form-control w-100" placeholder={placeholder} aria-label={placeholder} required />
      <div className="form-text">Veuillez rentrer une adresse mail de type: johndoe@gmail.com.</div>
    </div>
  )
}

export default InputMail