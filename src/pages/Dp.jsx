import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Secretary from './QickLinks/SecForm'

const Stuffs = () => {
  const {user}=useSelector((state)=>({...state.auth}))

  const [sec,setStuff]=useState([])
useEffect(()=>{
  
// profile

async function fetchData(){
  try {
    const res=await axios.get('http://localhost:5000/stats/dp')
  setStuff(res.data)
  console.log('data',sec);
  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[sec])

// classes

const [foureast,setFourEast]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('https://butere.onrender.com/stats/form4east')
    setFourEast(res.data)

  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])

const [fournorth,set4North]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('https://butere.onrender.com/stats/form4north')
    set4North(res.data)

  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])
const [foursouth,set4South]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('http://localhost:5000/stats/form4south')
    set4South(res.data)

  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])
const [fourwest,set4west]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('http://localhost:5000/stats/form4west')
    set4west(res.data)

  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])


const [f3east,set3east]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('http://localhost:5000/stats/form3east')
  set3east(res.data)
  console.log('data',sec);
  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])
const [f3north,set3north]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('http://localhost:5000/stats/form3north')
  set3north(res.data)
  console.log('data',sec);
  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])
const [f3south,set3South]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('http://localhost:5000/stats/form3south')
  set3South(res.data)
  console.log('data',sec);
  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])
const [f3west,set3west]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('http://localhost:5000/stats/form3west')
  set3west(res.data)
  console.log('data',sec);
  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])
const [f2east,set2east]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('http://localhost:5000/stats/form2east')
  set2east(res.data)
  console.log('data',sec);
  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])
const [f2north,set2north]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('http://localhost:5000/stats/form2north')
  set2north(res.data)
  console.log('data',sec);
  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])
const [f2south,set2south]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('http://localhost:5000/stats/form2south')
  set2south(res.data)
  console.log('data',sec);
  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])
const [f2west,set2west]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('http://localhost:5000/stats/form2west')
  set2west(res.data)
  console.log('data',sec);
  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])
const [f1east,set1east]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('http://localhost:5000/stats/form1east')
  set1east(res.data)
  console.log('data',sec);
  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])
const [f1north,set1north]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('http://localhost:5000/stats/form1north')
  set1north(res.data)
  console.log('data',sec);
  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])
const [f1south,set1south]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('http://localhost:5000/stats/form1south')
  set1south(res.data)
  console.log('data',sec);
  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])
const [f1west,set1west]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('http://localhost:5000/stats/form1west')
  set1west(res.data)
  console.log('data',sec);
  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])


const [student,setStudent] =useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('http://localhost:5000/stats/total')
  setStudent(res.data)
  console.log('data',sec);
  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])

const [ter,setTer]=useState([])
useEffect(()=>{
  
async function fetchData(){
  try {
    const res=await axios.get('http://localhost:5000/stats/total1')
  setTer(res.data)
  console.log('data',sec);
  } catch (error) {
    console.log(error);
  }
  
}

fetchData()

},[])

  return (
    <div className="general-pages">
      { !sec[0]?.role ? <>
        <Secretary/>
      </> :''}


    <div className="general-topbar">
      { user?.email?.role==='Dp' ? sec.map((item)=>{
        return(
          <div>
            <div className="logo"><img src={item.imageFile} alt=""  className='image-logo'/></div>
<div className="personal-profile">
  <h5>Name:  {user?.email?.name}</h5>
  <h5>Role:{item.role}</h5>
  
</div></div>
        )
      }) :''}

      <div className="dash">
        <div className="one">
          Students: {student[0]?.total}
        </div>
        <div className="two">
          Teachers: {ter[0]?.total}
        </div>
      </div>
    
    </div>
    <h2>All Students</h2>
    <div className="posted-ass">
    

      <Card border="orange" style={{width:'100%'}}>
        <Card.Header style={{textAlign:'center'}}> Form 4 East Students</Card.Header>

        {foureast.map((item)=>{
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
         <span>archievements: </span>   {item.archievements}
          </Card.Text>
          <Card.Text>
        <span>Clubs: </span>    {item.club}
          </Card.Text>
          <Card.Text>
       <span>Co-activies: </span>     {item.activity}
          </Card.Text>
          <Card.Text>
       <Link to='/remarks'>
        Remarks
       </Link>
          </Card.Text>
        </Card.Body>
         )
        })}
        
      </Card>
      <Card border="orange" style={{width:'100%'}}>
        <Card.Header style={{textAlign:'center'}}> Form 4 North Students</Card.Header>

        {fournorth.map((item)=>{
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
         <span>archievements: </span>   {item.archievements}
          </Card.Text>
          <Card.Text>
        <span>Clubs: </span>    {item.club}
          </Card.Text>
          <Card.Text>
       <span>Co-activies: </span>     {item.activity}
          </Card.Text>
          <Card.Text>
       <Link to='/remarks'>
        Remarks
       </Link>
          </Card.Text>
        </Card.Body>
         )
        })}
        
      </Card>
      <Card border="orange" style={{width:'100%'}}>
        <Card.Header style={{textAlign:'center'}}> Form 4 South Students</Card.Header>

        {foursouth.map((item)=>{
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
         <span>archievements: </span>   {item.archievements}
          </Card.Text>
          <Card.Text>
        <span>Clubs: </span>    {item.club}
          </Card.Text>
          <Card.Text>
       <span>Co-activies: </span>     {item.activity}
          </Card.Text>
          <Card.Text>
       <Link to='/remarks'>
        Remarks
       </Link>
          </Card.Text>
        </Card.Body>
         )
        })}
        
      </Card>
      <Card border="orange" style={{width:'100%'}}>
        <Card.Header style={{textAlign:'center'}}> Form 4 West Students</Card.Header>

        {foursouth.map((item)=>{
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
         <span>archievements: </span>   {item.archievements}
          </Card.Text>
          <Card.Text>
        <span>Clubs: </span>    {item.club}
          </Card.Text>
          <Card.Text>
       <span>Co-activies: </span>     {item.activity}
          </Card.Text>
          <Card.Text>
       <Link to='/remarks'>
        Remarks
       </Link>
          </Card.Text>
        </Card.Body>
         )
        })}
        
      </Card>


      <Card border="orange" style={{width:'100%'}}>
        <Card.Header style={{textAlign:'center'}}> Form 3 East Students</Card.Header>

        {f3east.map((item)=>{
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
         <span>archievements: </span>   {item.archievements}
          </Card.Text>
          <Card.Text>
        <span>Clubs: </span>    {item.club}
          </Card.Text>
          <Card.Text>
       <span>Co-activies: </span>     {item.activity}
          </Card.Text>
          <Card.Text>
       <Link to='/remarks'>
        Remarks
       </Link>
          </Card.Text>
        </Card.Body>
         )
        })}
        
      </Card>


      <Card border="orange" style={{width:'100%'}}>
        <Card.Header style={{textAlign:'center'}}> Form 3 North Students</Card.Header>

        {f3north.map((item)=>{
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
         <span>archievements: </span>   {item.archievements}
          </Card.Text>
          <Card.Text>
        <span>Clubs: </span>    {item.club}
          </Card.Text>
          <Card.Text>
       <span>Co-activies: </span>     {item.activity}
          </Card.Text>
          <Card.Text>
       <Link to='/remarks'>
        Remarks
       </Link>
          </Card.Text>
        </Card.Body>
         )
        })}
        
      </Card>
      <Card border="orange" style={{width:'100%'}}>
        <Card.Header style={{textAlign:'center'}}> Form 3 South Students</Card.Header>

        {f3south.map((item)=>{
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
         <span>archievements: </span>   {item.archievements}
          </Card.Text>
          <Card.Text>
        <span>Clubs: </span>    {item.club}
          </Card.Text>
          <Card.Text>
       <span>Co-activies: </span>     {item.activity}
          </Card.Text>
          <Card.Text>
       <Link to='/remarks'>
        Remarks
       </Link>
          </Card.Text>
        </Card.Body>
         )
        })}
        
      </Card>
      <Card border="orange" style={{width:'100%'}}>
        <Card.Header style={{textAlign:'center'}}> Form 3 West Students</Card.Header>

        {f3west.map((item)=>{
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
         <span>archievements: </span>   {item.archievements}
          </Card.Text>
          <Card.Text>
        <span>Clubs: </span>    {item.club}
          </Card.Text>
          <Card.Text>
       <span>Co-activies: </span>     {item.activity}
          </Card.Text>
          <Card.Text>
       <Link to='/remarks'>
        Remarks
       </Link>
          </Card.Text>
        </Card.Body>
         )
        })}
        
      </Card>
      <Card border="orange" style={{width:'100%'}}>
        <Card.Header style={{textAlign:'center'}}> Form 2 East Students</Card.Header>

        {f2east.map((item)=>{
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
         <span>archievements: </span>   {item.archievements}
          </Card.Text>
          <Card.Text>
        <span>Clubs: </span>    {item.club}
          </Card.Text>
          <Card.Text>
       <span>Co-activies: </span>     {item.activity}
          </Card.Text>
          <Card.Text>
       <Link to='/remarks'>
        Remarks
       </Link>
          </Card.Text>
        </Card.Body>
         )
        })}
        
      </Card>
      <Card border="orange" style={{width:'100%'}}>
        <Card.Header style={{textAlign:'center'}}> Form 2 North Students</Card.Header>

        {f2north.map((item)=>{
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
         <span>archievements: </span>   {item.archievements}
          </Card.Text>
          <Card.Text>
        <span>Clubs: </span>    {item.club}
          </Card.Text>
          <Card.Text>
       <span>Co-activies: </span>     {item.activity}
          </Card.Text>
          <Card.Text>
       <Link to='/remarks'>
        Remarks
       </Link>
          </Card.Text>
        </Card.Body>
         )
        })}
        
      </Card>
      <Card border="orange" style={{width:'100%'}}>
        <Card.Header style={{textAlign:'center'}}> Form 2 South Students</Card.Header>

        {f2south.map((item)=>{
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
         <span>archievements: </span>   {item.archievements}
          </Card.Text>
          <Card.Text>
        <span>Clubs: </span>    {item.club}
          </Card.Text>
          <Card.Text>
       <span>Co-activies: </span>     {item.activity}
          </Card.Text>
          <Card.Text>
       <Link to='/remarks'>
        Remarks
       </Link>
          </Card.Text>
        </Card.Body>
         )
        })}
        
      </Card>
      <Card border="orange" style={{width:'100%'}}>
        <Card.Header style={{textAlign:'center'}}> Form 2 West Students</Card.Header>

        {f2west.map((item)=>{
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
         <span>archievements: </span>   {item.archievements}
          </Card.Text>
          <Card.Text>
        <span>Clubs: </span>    {item.club}
          </Card.Text>
          <Card.Text>
       <span>Co-activies: </span>     {item.activity}
          </Card.Text>
          <Card.Text>
       <Link to='/remarks'>
        Remarks
       </Link>
          </Card.Text>
        </Card.Body>
         )
        })}
        
      </Card>
      <Card border="orange" style={{width:'100%'}}>
        <Card.Header style={{textAlign:'center'}}> Form 1 East Students</Card.Header>

        {f1east.map((item)=>{
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
         <span>archievements: </span>   {item.archievements}
          </Card.Text>
          <Card.Text>
        <span>Clubs: </span>    {item.club}
          </Card.Text>
          <Card.Text>
       <span>Co-activies: </span>     {item.activity}
          </Card.Text>
          <Card.Text>
       <Link to='/remarks'>
        Remarks
       </Link>
          </Card.Text>
        </Card.Body>
         )
        })}
        
      </Card>
      <Card border="orange" style={{width:'100%'}}>
        <Card.Header style={{textAlign:'center'}}> Form 1 North Students</Card.Header>

        {f1north.map((item)=>{
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
         <span>archievements: </span>   {item.archievements}
          </Card.Text>
          <Card.Text>
        <span>Clubs: </span>    {item.club}
          </Card.Text>
          <Card.Text>
       <span>Co-activies: </span>     {item.activity}
          </Card.Text>
          <Card.Text>
       <Link to='/remarks'>
        Remarks
       </Link>
          </Card.Text>
        </Card.Body>
         )
        })}
        
      </Card>
      <Card border="orange" style={{width:'100%'}}>
        <Card.Header style={{textAlign:'center'}}> Form 1 South Students</Card.Header>

        {f1south.map((item)=>{
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
         <span>archievements: </span>   {item.archievements}
          </Card.Text>
          <Card.Text>
        <span>Clubs: </span>    {item.club}
          </Card.Text>
          <Card.Text>
       <span>Co-activies: </span>     {item.activity}
          </Card.Text>
          <Card.Text>
       <Link to='/remarks'>
        Remarks
       </Link>
          </Card.Text>
        </Card.Body>
         )
        })}
        
      </Card>
      <Card border="orange" style={{width:'100%'}}>
        <Card.Header style={{textAlign:'center'}}> Form 1 West Students</Card.Header>

        {f1west.map((item)=>{
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
         <span>archievements: </span>   {item.archievements}
          </Card.Text>
          <Card.Text>
        <span>Clubs: </span>    {item.club}
          </Card.Text>
          <Card.Text>
       <span>Co-activies: </span>     {item.activity}
          </Card.Text>
          <Card.Text>
       <Link to='/remarks'>
        Remarks
       </Link>
          </Card.Text>
        </Card.Body>
         )
        })}
        
      </Card>

      
      </div>
    </div>
  )
}

export default Stuffs