import React,{useState} from 'react'
import CVBuilder from './CVbuilder/CVBuilder'
import uniquid from 'uniqid';

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
   
const handleTextEdit = (e)=> {



}

     


  return (
    <div className='main'>
     <CVBuilder
     education={education}
     practice={practice}
     addItem={addItem}
     delteItem={deleteItem}
     handleTextEdit={handleTextEdit}
      />
    </div>
  )
}

export default Main