import React from 'react'
import Education from './Education';

const CVBuilder = () => {
  return (
    <div className='cv-builder'>
    <Education 
     addItem={addItem}
     deleteItem={deleteItem}
     section='education'
     

    />


    </div>
  )
}

export default CVBuilder