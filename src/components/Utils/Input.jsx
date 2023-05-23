import React from 'react';

const Input = (props) => {

  const {onChange,title, e, section, index, id } = props
  return (
    <input type='text' 
    placeholder={title}
    onChange={(e) => onChange(e, section, index, id, e.target.value)}

    >    
    </input>
  )
}

export default Input