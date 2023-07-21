import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import F1East from '../Classes/F1East';
import F1North from '../Classes/F1North';
import F1South from '../Classes/F1South';
import F1Weast from '../Classes/F1Weast';
import F2East from '../Classes/F2East';
import F2North from '../Classes/F2North';
import F2South from '../Classes/F2South';
import F2West from '../Classes/F2West';
import F3East from '../Classes/F3East';
import F3North from '../Classes/F3North';
import F3South from '../Classes/F3South';
import F3West from '../Classes/F3West';
import F4East from '../Classes/F4East';
import F4North from '../Classes/F4North';
import F4South from '../Classes/F4South';
import F4West from '../Classes/F4West';
import PostedAss from './PostedAss';

const Middle = () => {
    const {user}=useSelector((state)=>({...state.auth}))
    const [users,setTours]=useState([]);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = users.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, users]);


const base64 =users[index]?.imageFile
  useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get(`https://butere.onrender.com/ass`)
      
    // res.data.sort(compare)
    setTours(  res.data)
    console.log(users.length);
    
    } catch (error) {
      console.log(error);
      
    }
    }
    fetchData()
      },[])



 if(user?.email?.clas==='4East'){
    return(
        <> 
        <F4East/>
        </>
       
    )
 } if(user?.email?.clas==='4West'){
    return(
        <> 
        <F4West/>
        </>
       
    )
 }if(user?.email?.clas==='4South'){
    return(
        <> 
        <F4South/>
        </>
       
    )
 }if(user?.email?.clas==='4North'){
    return(
        <> 
        <F4North/>
        </>
       
    )
 }if(user?.email?.clas==='3West'){
    return(
        <> 
        <F3West/>
        </>
       
    )
 }if(user?.email?.clas==='3South'){
    return(
        <> 
        <F3South/>
        </>
       
    )
 }if(user?.email?.clas==='3North'){
    return(
        <> 
        <F3North/>
        </>
       
    )
 }if(user?.email?.clas==='2East'){
    return(
        <> 
        <F2East/>
        </>
       
    )
 }if(user?.email?.clas==='2West'){
    return(
        <> 
        <F2West/>
        </>
       
    )
 }if(user?.email?.clas==='2South'){
    return(
        <> 
        <F2South/>
        </>
       
    )
 }if(user?.email?.clas==='2North'){
    return(
        <> 
        <F2North/>
        </>
       
    )
 }if(user?.email?.clas==='1East'){
    return(
        <> 
        <F1East/>
        </>
       
    )
 }if(user?.email?.clas==='1West'){
    return(
        <> 
        <F1Weast/>
        </>
       
    )
 }if(user?.email?.clas==='1North'){
    return(
        <> 
        <F1North/>
        </>
       
    )
 }if(user?.email?.clas==='1South'){
    return(
        <> 
        <F1South/>
        </>
       
    )
 }
 
 
 if(user?.email?.clas==='3East'){
    return(
        <> 
        <F3East/>
        </>
       
    )
 } else{
    return(
        <>
        <h3> sorry You dont belong to this school</h3>

        <button className="btn">
            <Link to='/'>
                Return Home</Link>        </button>
        </>
    )
    




 }
}

export default Middle