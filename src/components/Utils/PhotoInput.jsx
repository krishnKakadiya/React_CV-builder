import React from 'react';
// import AddIcon  from "../../assets/add.png";
// import AddI from "../../../public/images/add.png"

const PhotoInput = (props) => {

  const {onChange} = props
  console.log(props);
  return (
    <div style={{
      display:"flex",
    }}>

    <label>
    choose Photo
    {/* <AddIcon /> */}
    <img style={{
      width:'22%',
    
    

    }} src="../../../public/images/add.png" alt="" />
    <input type="file" accept='image/*' id='photo' 
    onChange={(e) => onChange(e)}
     />
    </label>
    </div>
  )
}

export default PhotoInput