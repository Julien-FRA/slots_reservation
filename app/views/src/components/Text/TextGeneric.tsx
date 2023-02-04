import React from 'react'

interface TextContentProps {
  content?: string;
}

const TextContent = ({content}: TextContentProps) => {
  return (
    <p className='mx-2 my-2'>{content}</p>
  )
}

export default TextContent