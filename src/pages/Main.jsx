import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Students from '../pages/QickLinks/Students'
import Teachers from '../pages/QickLinks/Teachers'
import Stuffs from '../pages/QickLinks/Stuffs'
import Login from './Login'
import Bursor from './Bursur'
import Dp from './Dp'
const Main = () => {
    const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>({...state.auth}))

    if( user?.email?.role==='Student' ){
        return(
            <div >
                {/* <Caretaker/> */}
                <Students/>
            </div>
        )
    }if( user?.email?.role==='Teacher' ){
        return(
            <div >
                {/* <Caretaker/> */}
                <Teachers/>
            </div>
        )
    }if( user?.email?.role==='Sec' ){
        return(
            <div >
                {/* <Caretaker/> */}
                <Stuffs/>
            </div>
        )
    }
    if( user?.email?.role==='Bursor' ){
        return(
            <div >
                {/* <Caretaker/> */}
                <Bursor/>
            </div>
        )
    }
    if( user?.email?.role==='Dp' ){
        return(
            <div >
                {/* <Caretaker/> */}
                <Dp/>
            </div>
        )
    }
    else{
        return(
          <>
          <Login/>
        
          </>
        )
        
      }
      
  
}

export default Main