
import React, {useState, useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {  toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import {  updateTour } from '../../redux/features/projectSlice';
import FileBase from "react-file-base64";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createComplain } from '../../redux/features/complain';
import { createNotice } from '../../redux/features/noticeSlice';

function Secretary() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    const dispatch=useDispatch()
    const navigate=useNavigate()
  
    // const { user } = useSelector((state) => ({ ...state.auth }));
  
  
    const [form,setForm]=useState({
      empNo:'',
      role:'',
      imageFile:''
                 })
     const handleSubmit= (e)=>{
      
         e.preventDefault()
         e.target.reset();
         if (form){
          const updateddata={...form}
         if(!id){
          dispatch(createNotice(updateddata,toast))
          navigate('/login')
         }else{
          dispatch(updateTour({updateddata,id,toast}))
         }
         
         
         }
     }
   
    const {id}=useParams()




  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form id='cancelCourse' onSubmit={handleSubmit} className='form'>
  
  <div className="main-rent-create">
  <h4>Update Your Profile</h4>
         <input type="text" placeholder='employee number' required onChange={(e)=>setForm({...form,empNo:e.target.value})} />

          <input type="text" placeholder='Role' onChange={(e)=>setForm({...form,role:e.target.value})}   />
         <h6>Profile Photo</h6>
          <FileBase
              type="file"
              placeholder='mpesa screenshot'
              multiple={false}
              onDone={({ base64 }) =>
                setForm({ ...form, imageFile: base64 })
              }
            />

</div>      
<button className='btn' >
      Submit
    </button>
    </form>     


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Secretary