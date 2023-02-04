import React from 'react'
import { Link } from "react-router-dom";

interface BtnLinkProps {
    link: string
    placeholder?: string;
    className: string;
}

const BtnLink = ({link, placeholder, className}: BtnLinkProps) => {
  return (
    <Link to={link} className={className}>{placeholder}</Link>  
  )
}

export default BtnLink