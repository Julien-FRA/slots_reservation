import React from 'react'

interface InputPswProps {
  name?: string;
  placeholder?: string;
  length?: number;
}

const InputPsw = ({name, placeholder, length}: InputPswProps) => {
  return (
    <div className="d-flex flex-column input-group mx-2 my-2">
      <label className="form-label">{placeholder}</label>
      <input type="password" name={name} className="form-control w-100" placeholder={placeholder} aria-label={placeholder} required={true} minLength={5} />
      <div className="form-text">Veuillez rentrer au minimum {length} charactères</div>
    </div>
  )
}

export default InputPsw