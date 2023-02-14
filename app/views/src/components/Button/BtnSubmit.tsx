import React from 'react'
import { Button } from 'react-bootstrap'

interface BtnSubmitProps {
  variant?: string;
  value?: string;
  placeholder?: string;
  action?: () => void;
  disabled: boolean;
}

const BtnSubmit = ({variant, value, placeholder, action, disabled}: BtnSubmitProps) => {
  return (
    <Button className='mx-2' variant={variant} value={value} type="submit" onClick={action} disabled={disabled}>{placeholder}</Button>
  )
}

export default BtnSubmit