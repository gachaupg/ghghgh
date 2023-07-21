import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FileBase from "react-file-base64";
import TeachersForm from './TeachersForm'
import { closeModal } from '../../redux/modal/modalSlice'

const Modal = () => {
  const dispatch=useDispatch();
  const [form,setForm]=useState({
    empNo:'',
    subjects:'',
    role:'',
    classes:'',
    imageFile:''
  })

  return (
    <aside className="modal-container">
      <div className="modal">
        <TeachersForm/>
            <div className="btn-container">
          <button className=" btn confirm-btn" onClick={()=>{
            // dispatch(clearCart())
           
            dispatch(closeModal())
          }}>
            Submit
          </button>
          <button className=" btn clear-btn" onClick={()=>{
             alert('are you sure')
            dispatch(closeModal())
          }}>
            cancel
          </button>
          </div>
            

        
        
      </div>
    </aside>
  )
}

export default Modal