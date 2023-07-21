


import React, {useState, useEffect } from 'react'
import {StyledForm} from './StyledForm'
import { Link, useNavigate,useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
// import { StyledForm } from './StyledForm'
import { useDispatch, useSelector } from "react-redux";
import { createProject, updateTour } from '../../redux/features/projectSlice';
import FileBase from "react-file-base64";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createComplain } from '../../redux/features/complain';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    const {projects}=useSelector((state)=>({...state.project}))
    const notify = () => toast("Wow so easy!");
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [tours,setTours]=useState([])
  
    const { user } = useSelector((state) => ({ ...state.auth }));
  
  
    const {error ,loading}= useSelector((state)=>({...state.project}))
    const [form,setForm]=useState({
      empNo:'',
      classes:'',
      subjects:'',
      role:'',
      imageFile:''
                 })
     const handleSubmit= (e)=>{
      
         e.preventDefault()
         e.target.reset();
         if (form){
          const updateddata={...form}
         if(!id){
          dispatch(createComplain(updateddata,toast))
          // navigate('/teacher')
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form id='cancelCourse' onSubmit={handleSubmit} className='form'>
  
  <div className="main-rent-create">
  <h4>Update Your Profile</h4>
         <input type="text" placeholder='addimission number' required onChange={(e)=>setForm({...form,empNo:e.target.value})} />

          <input type="text" placeholder='class eg 4East' onChange={(e)=>setForm({...form,subjects:e.target.value})} />
          <input type="text" placeholder='school club' onChange={(e)=>setForm({...form,role:e.target.value})}   />
          <input type="text" placeholder='co cirriculum activity' onChange={(e)=>setForm({...form,classes:e.target.value})}  />
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
      {/* {auth.registerStatus==='pedding' ? 'submitting':'register' } */}
      Submit
    </button>
    </form>     


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example