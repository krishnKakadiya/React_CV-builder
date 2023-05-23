import React from 'react';
// import AddIcons  from "../../assets/add.png";

const PhotoInput = (props) => {

  const {onChange} = props
  return (
    <label>
    choose Photo
    {/* <AddIcons /> */}
    <input type="filr" accept='image/*' id='photo' 
    onChange={(e) => onChange(e)}
     />
    </label>
  )
}

export default PhotoInput