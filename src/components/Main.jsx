import React,{useState} from 'react'
import uniquid from 'uniqid';
import CVBuilder from './CVbuilder/CVBuilder'
import CvPreview from './CvPreview/CvPreview';

const Main = () => {

    const [profile, setProfile] = useState([
        {

        firstName:'',
        lastName:'',
        title:'',
        description:'',
        phone:'',
        email:'',
        address:'',
    },
])

const [education, setEducation] = useState([
    {
        id: uniquid(),
        universityName:'',
        degree:'',
        course:'',
        from:'',
        to:'',
    },
])

const [practice, setPractice] = useState([
    {
        id:uniquid(),
        title:'',
        companyName:'',
        from: '',
        to: '',
        descrtiption:'',
    },
])

const addItem = (section) => {
if (section === 'education') {
    const newItem = {
     id: uniquid(),
    universityName:'',
    degree:'',
    course:'',
    from:'',
    to:'',
    }  
    
    setEducation([ ...education, newItem])
}else{
    const newItem = {
        id: uniquid(),
        title:'',
        companyName:'',
        city:'',
        from:'',
        to:'',
        description:'',
    }
    setPractice([...practice, newItem])
}
}


const deleteItem = (section, id) => {
    if (section === 'education') {
        const newArray = education.filter(item => item.id !== id)
        setEducation(newArray)
        console.log(newArray);
       
    }else{
        const newArray = practice.filter(item => item.id !== id)
        setPractice(newArray)
        console.log(newArray);
    }
}
   
const handleTextEdit = (e, section, index = 0, input) => {
    if (section === 'profile') {
      const items = [...profile]
      items[index][input] = e.target.value
      
      setProfile(items)
      console.log(items);
    } else if (section === 'education') {
      const items = [...education]
      items[index][input] = e.target.value
      setEducation(items)
      console.log(items);
    } else {
      const items = [...practice]
      items[index][input] = e.target.value
      setPractice(items)
      console.log(items);
    }
  }

  const handlePhotoEdit = e => {
    const file = e.target.files[0]
    const reader = new FileReader()
    const items = [...profile]
    reader.onload = () => {
      items[0].photo = reader.result
      setProfile(items)
    }
    reader.readAsDataURL(file)
  }

     


  return (
    <div className='main'>
     <CVBuilder
     education={education}
     practice={practice}
     addItem={addItem}
     delteItem={deleteItem}
     handleTextEdit={handleTextEdit}
     handlePhotoEdit={handlePhotoEdit}
      />
      <CvPreview  profile={profile} education={education} practice={practice} />
    </div>
  )
}

export default Main