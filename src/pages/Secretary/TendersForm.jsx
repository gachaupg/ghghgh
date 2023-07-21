import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createVacation } from '../../redux/features/vacation';
const Tenders = () => {
  const [form,setForm]=useState({
title:'',
desc:''
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
          dispatch(createVacation(updateddata,toast))
          // navigate('/student')
         }
         
         
         }
  }


  const {id}=useParams()
  
  return (
    <Form onSubmit={handleSubmit} className=''>
      <div className="main-tender-sec">

        <div className="tender-quiz">
        <Card border="orange" style={{ width: '18rem' }}>
        <Card.Header>Tenders Application Form</Card.Header>
        <Card.Body>
          
          <Card.Text>
            <button  className="btn">
             <Link to='/tenderquiz'>Upload Tender Application Form</Link>   
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
      <div className="general-form">
        <div className="n">
    <Form.Group className="mb-3">
     
      <Form.Label>Type Of Tender</Form.Label>
      <Form.Control onChange={(e)=>setForm({...form,title:e.target.value})} className='input'  type="text" placeholder="tender type" />
     
    </Form.Group>
</div>
<div className="n">
    <Form.Group className="mb-3"  >
      <Form.Label>Description of the tender</Form.Label>
      <Form.Control className='input' onChange={(e)=>setForm({...form,desc:e.target.value})} type="text" placeholder="Description of the tender" />
    </Form.Group>
    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group> */}
    </div><Button variant="primary" type="submit">
      Submit
    </Button>
    </div></div>
  </Form>
  )
}

export default Tenders