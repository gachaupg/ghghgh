import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Secretary from './QickLinks/SecForm'

const Stuffs = () => {
  const {user}=useSelector((state)=>({...state.auth}))

  const [sec,setStuff]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('https://butere.onrender.com/stats/bursor')
  setStuff(res.data)
  console.log('data',sec[0]?.role);
  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])



  return (
    <div className="general-pages">
      { !sec[0]?.role ? <>
        <Secretary/>
      </> :''}


    <div className="general-topbar">
      { user?.email?.role==='Bursor' ? sec.map((item)=>{
        return(
          <div>
            <div className="logo"><img src={item.imageFile} alt=""  className='image-logo'/></div>
<div className="personal-profile">
  <h5>Name:  {user?.email?.name}</h5>
  <h5>Role:{item.role}</h5>
  
</div></div>
        )
      }) :''}
    
    </div>
    <h2>Roles</h2>
    <div className="posted-ass">
    <Card border="orange" style={{ width: '18rem' }}>
        <Card.Header>Tenders</Card.Header>
        <Card.Body>
          
          <Card.Text>
            <button  className="btn">
             <Link to='/tenderform'>Post Tenders</Link>   
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}

export default Stuffs