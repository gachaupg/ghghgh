import React from 'react'
import { Card } from 'react-bootstrap'

const Facilities = () => {
  return (
    <>
    <h2>FEATURED AMENITIES</h2>
    <div style={{ width:'100%', padding:'1rem',gap:'2rem',justifyContent:'space-around',flexWrap:'wrap',display:'flex',flexDirection:'row'}}>

    <Card className='card1' style={{ border:'none' ,color:'black',}}>
  

  

    <Card.Img variant="top" style={{height:'15rem' ,objectFit:'cover'}} src="https://www.knqa.go.ke/wp-content/uploads/2021/04/EvyhdukXYAQRtNQ.jpg" />
    <Card.Title>Our Library</Card.Title>

  <Card.Body>


  </Card.Body>
  
 
  
</Card>
<Card className='card1' style={{ border:'none' ,color:'black',}}>
  
  <Card.Body>
  <Card.Img variant="top" style={{height:'15rem' ,objectFit:'cover'}} src="https://www.knqa.go.ke/wp-content/uploads/2021/04/EvyhdukXYAQRtNQ.jpg" />

    <Card.Title>Our Labs</Card.Title>
   
  </Card.Body> 
</Card>
<Card className='card1' style={{ border:'none' ,color:'black',}}>


    <Card.Img variant="top" style={{height:'15rem' ,objectFit:'cover'}} src="https://www.knqa.go.ke/wp-content/uploads/2021/04/EvyhdukXYAQRtNQ.jpg" />
  <Card.Title>Science Park</Card.Title>

  <Card.Body>
  </Card.Body>
  
 
  
</Card>

      
    </div>
  </>)
}

export default Facilities