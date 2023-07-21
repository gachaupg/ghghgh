import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Control = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>({...state.auth}))
    const userId =user?.result?._id
  return (
    <>
    <div className='home-main'>
      
     {user ? navigate('/main'):navigate('/login') }
  </div>
     
        
       </>
  )
}

export default Control