import React from 'react'

interface InputTextProps {
  name?: string;
  placeholder?: string;
  length?: number;
}

const InputText = ({name, placeholder, length}: InputTextProps) => {
  return (
    <div className="d-flex flex-column input-group mx-2 my-2">
      <label className="form-label">{placeholder}</label>
      <input type="text" name={name} className="form-control w-100" placeholder={placeholder} aria-label={placeholder} required={true} minLength={length} />
      <div className="form-text">Veuillez rentrer au minimum {length} charactères</div>
    </div>
  )
}

export default InputText