import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import FileBase from "react-file-base64";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createVacation } from '../../redux/features/vacation';
import { createMilestone } from '../../redux/features/mileSlice';
import { createTenant } from '../../redux/features/TenantSlice';
import { createCareTakercomplain } from '../../redux/features/Caretakercomment';
const News = () => {
  const [form,setForm]=useState({
title:'',
desc:'',

  })
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [tours,setTours]=useState([])

  const { user } = useSelector((state) => ({ ...state.auth }));


  const handleSubmit=(e)=>{
    e.preventDefault()
    e.target.reset();
         if (form){
          const updateddata={...form}
         if(!id){
          dispatch(createCareTakercomplain(updateddata,toast))
          // navigate('/student')
         }
         
         
         }
  }


  const {id}=useParams()
  
  return (
    <Form onSubmit={handleSubmit} className=''>
      <div className="main-tender-sec">

      <div className="general-form">
        <div className="n">
    <Form.Group className="mb-3">
     
      <Form.Label>Meetings</Form.Label>
      <Form.Control style={{width:'18rem'}} onChange={(e)=>setForm({...form,title:e.target.value})} className='input'  type="text" placeholder="Meeting title and Venue" />
     
    </Form.Group>
</div>
<div className="n">
    <Form.Group className="mb-3"  >
      <Form.Label>Meeting time</Form.Label>
      <Form.Control style={{ width: '18rem' }} className='input' onChange={(e)=>setForm({...form,desc:e.target.value})} type="date" placeholder="meeting time " />
     
    </Form.Group>
    
    
    </div><Button variant="primary" type="submit">
      Submit
    </Button>
    </div></div>
  </Form>
  )
}

export default News