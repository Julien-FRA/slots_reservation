import React from 'react'

interface TitreProps {
  content?: string;
}

const Titre = ({content}: TitreProps) => {
  return (
    <h1 className='mx-2 my-2'>{content}</h1>
  )
}

export default Titre