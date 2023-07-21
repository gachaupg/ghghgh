import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FileBase from "react-file-base64";

import { closeModal } from '../../redux/modal/modalSlice'
import { createProject, createStudent, updateTour } from '../../redux/features/projectSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Form from  './Form'
const Modal = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {projects}=useSelector((state)=>({...state.project}))

  const [form,setForm]=useState({
    adm:'',
    clas:'',
    club:'',
    activity:'',
    archievements:'',
    imageFile:''
  })
  const handleSubmit= (e)=>{
    
    e.preventDefault()
    if (form){
     const updateddata={...form}
    if(!id){
     dispatch(createProject(updateddata,toast))
     console.log(form);
    }
    
    
    }

}

const {id}=useParams()
  return (
    <aside className="modal-container">
      <div className="modal">

        <Form/>
        {/* <form action=""  onSubmit={handleSubmit}> */}
         
           {/* <h4>Update Your Profile</h4>
           <input type="text" placeholder='addimission number' required onChange={(e)=>setForm({...form,adm:e.target.value})} />
{form.adm}
            <input type="text" placeholder='class eg 4East' onChange={(e)=>setForm({...form,clas:e.target.value})} />
            <input type="text" placeholder='school club' onChange={(e)=>setForm({...form,club:e.target.value})}   />
            <input type="text" placeholder='co cirriculum activity' onChange={(e)=>setForm({...form,activity:e.target.value})}  />
            <input type="text" placeholder='archievements' onChange={(e)=>setForm({...form,archievements:e.target.value})}  />
           <h6>Profile Photo</h6>
            <FileBase
                type="file"
                placeholder='mpesa screenshot'
                multiple={false}
                onDone={({ base64 }) =>
                  setForm({ ...form, imageFile: base64 })
                }
              /> */}

            <div className="btn-container">
          <button className=" btn confirm-btn" onClick={()=>{
            // dispatch(clearCart())
            
            dispatch(closeModal())
          }}>
            Submit
          </button>
          <button className=" btn clear-btn" onClick={()=>{
            
            dispatch(closeModal())
          }}>
            cancel
          </button>
          </div>
            

        {/* </form> */}
        
      </div>
    </aside>
  )
}

export default Modal