import React from 'react'


import { Card } from 'react-bootstrap'

import {Link} from 'react-router-dom';

function Summarypage(props) {
  
  return (
    <div 
    style={{color:'whitesmoke', padding:'1rem',gap:'2rem',backgroundColor:'rgb(37, 36, 36)',justifyContent:'space-around',flexWrap:'wrap',display:'flex',flexDirection:'row'}}>


    <Card style={{ width: '14rem',border:'none',backgroundColor:'rgb(37, 36, 36)',color:'whitesmoke', }}>
  
      <Card.Body>
        <Card.Title>Useful Links</Card.Title>
        <h6><Link to="/About" style={{color:'white'}} >About</Link> </h6> 
      <h6><Link to="/Academics" style={{color:'white'}} >Academics</Link></h6>
      <h6><Link to="/Library" style={{color:'white'}}>Library</Link></h6>
      <h6><Link to="/Contact" style={{color:'white'}}>Contact</Link></h6>
      <h6><Link to="/Tenders" style={{color:'white'}} >Tenders</Link></h6>
      <h6><Link to="/teachers" style={{color:'white'}} >Teachers</Link></h6>
      <h6><Link to="/students" style={{color:'white'}} >Students</Link></h6>
      <h6><Link to="/stuffs" style={{color:'white'}} >Staffs</Link></h6>

       
      </Card.Body>
      
     
      
    </Card>


    <Card style={{ width: '14rem',border:'none',backgroundColor:'rgb(37, 36, 36)',color:'whitesmoke', }}>
  
  <Card.Body>
    <Card.Title>Useful Links</Card.Title>
   <h6>
   Mathematics  
   </h6> 
   <h6>
    Business Studies 
   </h6>
   <h6>English. </h6>
    <h6>Kiswahili</h6>
    <h6>Biology </h6>
    <h6>Chemistry </h6>
    <h6>Geography </h6>
    <h6>History</h6>
    <h6>CRE</h6>
    <h6>Woodwork </h6> 
    <h6>Agriculture </h6>
    <h6>Computer Studies </h6>
    
           
                              
                           
                                
 
 






   

   
  </Card.Body>
  
 
  
</Card>

<Card style={{ width: '14rem',border:'none',backgroundColor:'rgb(37, 36, 36)',color:'whitesmoke', }}>
  
      <Card.Body>
        <Card.Title>Useful Links</Card.Title>
        <h6>form1</h6>
      <h6>form2</h6>
      <h6>form2</h6>
      <h6>form3</h6>
      
      <h6>form4</h6>
      
       
      </Card.Body>
      
     
      
    </Card>

      
    </div>
    
  )
}

export default Summarypage