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
import { createCaretakerVacation } from '../../redux/features/caretakerVacation';
import { createExpense } from '../../redux/features/expenses';
import { createSummary } from '../../redux/features/summarySlice';
import { createFees } from '../../redux/features/userCrudSlice';
const News = () => {
  const [form,setForm]=useState({
subject:'',


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
          dispatch(createSummary(updateddata,toast))
          // navigate('/student')
         }
         
         
         }
  }

  const handleSubmit1=(e)=>{
    e.preventDefault()
    e.target.reset();
         if (form){
          const updateddata={...form}
         if(!id){
          dispatch(createFees(updateddata,toast))
          // navigate('/student')
         }
         
         
         }
  }


  const {id}=useParams()
  
  return (
    <div style={{display:'flex',justifyContent: 'center',alignItems: 'center',
flexDirection:'row', width:'100%',flexWrap:'wrap'}}>
    <Form onSubmit={handleSubmit1} className=''>
      <div className="main-tender-sec">

      <div className="general-form">
        <div className="n">
    <Form.Group className="mb-3">
     <h4>Fees Structure</h4>
      <Form.Label>title</Form.Label>
      <Form.Control style={{width:'15.5rem'}} onChange={(e)=>setForm({...form,subject:e.target.value})} className='input'  type="text" placeholder=" title" />
     
    </Form.Group>
</div>

  
    <div className="n">
    <p>tender form eg,docs,png,jpeg,pdf</p>
      <FileBase
      style={{width:'15.5rem'}}
              type="file"
              placeholder='mpesa screenshot'
              multiple={false}
              onDone={({ base64 }) =>
                setForm({ ...form, imageFile: base64 })
              }
            /></div>
    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group> */}
   < Button style={{width:'15.5rem'}}  variant="orange" type="submit">
      Submit
    </Button>
    </div>
    </div>
  </Form>
  <Form onSubmit={handleSubmit} className=''>
      <div className="main-tender-sec">

      <div className="general-form">
        <div className="n">
    <Form.Group  className="mb-3">
     <h4>Results</h4>
      <Form.Label>title</Form.Label>
      <Form.Control style={{width:'15.5rem'}} onChange={(e)=>setForm({...form,subject:e.target.value})} className='input'  type="text" placeholder=" title" />
     
    </Form.Group>
</div>

  
    <div className="n">
    <p>ttender form eg,docs,png,jpeg,pdf</p>
      <FileBase
      style={{width:'15.5rem'}}
              type="file"
              placeholder='mpesa screenshot'
              multiple={false}
              onDone={({ base64 }) =>
                setForm({ ...form, imageFile: base64 })
              }
            /></div>
    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group> */}
   < Button style={{width:'15.5rem'}} variant="orange" type="submit">
      Submit
    </Button>
    </div>
    </div>
  </Form>
  </div>
  )
}

export default News