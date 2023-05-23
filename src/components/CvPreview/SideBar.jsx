import React from 'react'
import EducationItem from './EducationItem'
// import Phone from "../../assets/Phome.png"
// import Email from "../../assets/email.png"
// import Address from "../../assets/address.png"

const SideBar = props => {
  const { profile, items } = props

  return (
    <div className='cv-sidebar'>
      <div className='section'>
        <h2 className='title'>Contacts</h2>
        <div className='items'>
          <div className='item'>
            <div className='icon-title'>
              {/* <Phone /> */}
              {profile[0].phone}
            </div>
            <div className='icon-title'>
              {/* <Email /> */}
              {profile[0].email}
            </div>
            <div className='icon-title'>
              {/* <Address /> */}
              {profile[0].address}
            </div>
          </div>
        </div>
      </div>
      <div className='section'>
        <h2 className='title'>Education</h2>
        <div className='items'>
          {items.map(item => (
            <EducationItem
              key={item.id}
              degree={item.degree}
              name={item.universityName}
              course={item.course}
              from={item.from}
              to={item.to}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar
