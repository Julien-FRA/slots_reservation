import React from 'react'
import { Button } from 'react-bootstrap'

interface BtnSubmitProps {
  variant?: string;
  value?: string;
  placeholder?: string;
  action?: () => void;
}

const BtnSubmit = ({variant, value, placeholder, action}: BtnSubmitProps) => {
  return (
    <Button className='mx-2' variant={variant} value={value} type="submit" onClick={action}>{placeholder}</Button>
  )
}

export default BtnSubmit