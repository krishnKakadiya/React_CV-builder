import React from 'react';
import AddIcons  from "../../assets/add.png";

const PhotoInput = () => {
  return (
    <label>
    choose Photo
    <AddIcons />
    <input type="filr" accept='image/*' id='photo'  />
    </label>
  )
}

export default PhotoInput