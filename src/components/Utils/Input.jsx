import React from 'react';

const Input = (props) => {

  const {title, e, section, index, id } = props
  return (
    <input type='text' 
    placeholder={title}
    onChange={(e) => onChange(e, section, index, id)}
    >    
    </input>
  )
}

export default Input