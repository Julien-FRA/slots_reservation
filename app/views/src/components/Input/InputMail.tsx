import React from 'react'

interface InputMailProps {
  name?: string;
  placeholder?: string;
}

const InputMail = ({name, placeholder}: InputMailProps) => {
  return (
    <div className="input-group mx-2 my-2">
      <input type="email" name={name} className="form-control" placeholder={placeholder} aria-label={placeholder} pattern=".+@globex\.com" required />
    </div>
  )
}

export default InputMail