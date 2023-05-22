import React from 'react'

const Input = () => {
  return (
    <input type='text' 
    placeholder="enter input here"
    onChange={(e) => onChange(e, section, index, id)}
    >    
    </input>
  )
}

export default Input