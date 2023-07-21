import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import TeachersModal from './TeachersModal'
import Form from './Form'
import Example from './TeachersForm'
import axios from 'axios'
const Teachers = () => {
  const {user}=useSelector((state)=>({...state.auth}))
const[show,setShow]=useState(true)


const userId =user?.email?._id
const showModal=()=>{
   setShow(false)
}
const [users,setTours]=useState([]);

useEffect(()=>{
  async function fetchData(){
  try {
    const res= await axios.get(`https://butere.onrender.com/teacher/userStudents/${userId}`)
    
  // res.data.sort(compare)
  setTours(  res.data)
  console.log('data',users);
  
  } catch (error) {
    console.log(error);
    
  }
  }
  fetchData()
    },[])

    const [meeting,setMeeting]=useState([]);

useEffect(()=>{
  async function fetchData(){
  try {
    const res= await axios.get(`https://butere.onrender.com/meeting`)
    
  // res.data.sort(compare)
  setMeeting(  res.data)
  
  
  } catch (error) {
    console.log(error);
    
  }
  }
  fetchData()
    },[])


  return (
<div className="general-pages">
{!users[0]?<>
<h2><Example /></h2>


</>:''}
{users.map((i)=>{
  return(
    <>
    
   
    <div className="general-topbar">
      
      <div className="logo"><img src={i.imageFile} alt=""  className='image-logo'/></div>
<div className="personal-profile">
  <h5>name: {user?.email?.name}</h5>
  <h5>EmpNo:{i.empNo}</h5>
  
  <h5>Subjects:{i.subjects}</h5>
</div>
    </div>

    <div className="teachers-contents">
<div className="classes">
  <h4>My Classes</h4>
  <Link to='/form4east' className='otherinfo'>
    <h5>{i.classes}</h5>
  </Link>
  
  <h5>Form 3East:maths</h5>
  <h5>Form 3East:maths</h5>
</div>
{meeting.map((i)=>{
  return(
   <div className="announcemets">
  <h4>Announcements:{i.title}</h4>
  <p className='te'>{i.desc}</p>
</div> 
  )
})}

    </div>
    <div className="button">
      <button className="btn">
      <Link to='/ass'>Upload assignments</Link>  
      </button>
      <button className="btn">
      <Link to='/revisionmaterials'>Upload RevisionMaterials</Link>  
      </button>
      <button className="btn">
       <Link style={{color:'whitesmoke'}} to='/admin'> Admin</Link>
      </button>
    </div>
    </>
  )
})}
 </div> )
}

export default Teachers