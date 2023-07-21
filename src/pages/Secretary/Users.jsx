import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTour } from '../../redux/features/projectSlice'
import {toast} from 'react-toastify'

const Users = () => {

    const {user}=useSelector((state)=>({...state.auth}))

    const dispatch=useDispatch()
  
  
  
    function compare(a,b){
      if(a._id <b._id){
        return 1
      }
      if(a._id >b._id){
        return -1
      }return 0
    }

    const [users,setFourEast]=useState([])
    useEffect(()=>{
      
    async function fetchData(){
      try {
        const res=await axios.get('https://butere.onrender.com/users/allusers')
        res.data.sort(compare)
        setFourEast(res.data)
    
      } catch (error) {
        console.log(error);
      }
      
    }
    
    fetchData()
    
    },[])

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this tour ?")) {
          dispatch(deleteTour({ id, toast }));
        }
      };



  return (
    <div className="general-pages">
        <Card border="orange" style={{width:'100%'}}>
        <Card.Header style={{textAlign:'center'}}> All Users</Card.Header>

        {users.map((item)=>{
                return(
         <Card.Body className='dpItems'>
          <img className='dp' src={item.imageFile} alt="" />
          <Card.Text  style={{marginTop:'0.5rem'}}>
          <span>Adimission number: </span>  {item.adm}
          </Card.Text>
          <Card.Text>
         <span>Class: </span>   {item.clas}
          </Card.Text>
          <Card.Text>
         <span>role: </span>   {item.role}
          </Card.Text>
         <Card.Text>
            <BsTrash style={{color:'red'}} onClick={() => handleDelete(item._id)}/>
         </Card.Text>
        </Card.Body>
         )
        })}
        
      </Card>
    </div>
  )
}

export default Users