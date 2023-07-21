import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

const Upcoming = () => {
const [events,setEvents]=useState([])
const [news,setNews]=useState([])

function compare(a,b){
  if(a._id <b._id){
    return 1
  }
  if(a._id >b._id){
    return -1
  }return 0
}




useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get(`http://localhost:5000/events`)
      
    res.data.sort(compare)
    const result = res.data.filter((_, index) => index < 1);
    console.log('result',result);

    setEvents(  result)
    console.log('data',events);
    
    } catch (error) {
      console.log(error);
      
    }
    }
    fetchData()
      },[])

      useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get(`http://localhost:5000/news`)
      
    res.data.sort(compare)
    const result = res.data.filter((_, index) => index < 3);
    console.log('result',result);

    setNews(  result)
    console.log('data',events);
    
    } catch (error) {
      console.log(error);
      
    }
    }
    fetchData()
      },[])


  return (

<div style={{ width:'100%', padding:'1rem',gap:'2rem',justifyContent:'space-around',flexWrap:'wrap',display:'flex',flexDirection:'row'}}>

      <Card className='card' style={{ border:'none',backgroundColor:'whitesmoke',color:'black',}}>
  
  <Card.Body>
    <Card.Title>Upcoming Events</Card.Title>
    <hr />
    {events.map((item)=>{    
      return(
<Card.Text>
<p>{item.title} <span style={{marginLeft:'1rem'}}>{item.desc}</span> :<span>{item.time}</span> </p> 
</Card.Text>

)
})}

  </Card.Body>
  
 
      
</Card>
<Card className='card' style={{ border:'none' ,color:'black'}}>
 {news.map((item)=>{
  return( 


      <Card.Body>
         <Card.Title>Upcoming Events</Card.Title>
      <Card.Title> News Title:  {news[0].title}</Card.Title>
      <hr />
  
      {/* <Card.Img variant="top" style={{height:'15rem' ,objectFit:'cover'}} src="https://www.knqa.go.ke/wp-content/uploads/2021/04/EvyhdukXYAQRtNQ.jpg" /> */}
  
  <Card.Text>
  News:  {news[0].desc}
  </Card.Text>
    </Card.Body>
  
    )
 })} 
    
 
  
 
  
</Card>

<Card className='card' style={{ border:'none' ,color:'black',}}>
  
  <Card.Body>
    <Card.Title>School Life</Card.Title>
    <hr />

    <Card.Img variant="top" style={{height:'15rem' ,objectFit:'cover'}} src="https://res.cloudinary.com/pitz/image/upload/v1670049609/4aa0ae29-6a15-444e-a238-92c93e4a0ee9_fceike.jpg" />

<Card.Text>
Webvent has the best staff who are qualified to develop Mobile applications in both android and iOS
</Card.Text>
  </Card.Body>
  
 
  
</Card>
<Card className='card' style={{ border:'none' ,color:'black',}}>
  
  <Card.Body>
    <Card.Title>Our Teachers</Card.Title>
    <hr />

    <Card.Img variant="top" style={{height:'15rem' ,objectFit:'cover'}} src="https://www.knqa.go.ke/wp-content/uploads/2021/04/EvyhdukXYAQRtNQ.jpg" />

<Card.Text>
Webvent has the best staff who are qualified to develop Mobile applications in both android and iOS
</Card.Text>
  </Card.Body>
  
 
  
</Card>


</div>

//     <div className='main-events'>
//         <div className="events">
//             <h2>Upcomig Events</h2>
// {events.map((item)=>{
//     return(

// <div style={{display:'flex',flexDirection:'column'}}>

        
//          <p>{item.title} <span>{item.desc}</span> :<span>{item.time}</span> </p> 
         
           
//          </div>       
           
       
//             )
//         })} </div>
//         <div className="students-life">
//             <h2>Students Life</h2>
// <img src="https://www.knqa.go.ke/wp-content/uploads/2021/04/EvyhdukXYAQRtNQ.jpg" alt="" />
//         </div>
//         </div>


  )
}

export default Upcoming