import React from 'react'
import { Card } from 'react-bootstrap'
import Base64Downloader from 'common-base64-downloader-react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import format from "format"

const Academics = () => {

  function compare(a,b){
    if(a._id <b._id){
      return 1
    }
    if(a._id >b._id){
      return -1
    }return 0
  }
  const [users,setTours]=useState([]);
  const [user,setTour]=useState([]);

  const base642 =user[0]?.imageFile
  const base64 =users[0]?.imageFile
  useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get(`https://butere.onrender.com/results`)
      
    res.data.sort(compare)
    const result = res.data.filter((_, index) => index < 1);
    setTours(  result)
    console.log(users.length);
    
    } catch (error) {
      console.log(error);
      
    }
    }
    fetchData()
      },[])

  return (
    <div style={{padding:'1rem', display:'flex',alinItems:'center',justifyContent:'center'}}>
{users.map((item=>{
  return(
<Card border="orange" style={{ width: '18rem' }}>
        <Card.Header>Results</Card.Header>
        <Card.Header>{format(item.createdAt)}</Card.Header>
        <Card.Body>
          <Card.Title>{item.subject}</Card.Title>
          <Card.Text>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vitae nisi fugit iusto facilis, modi doloribus veritatis assumenda enim eum tenetur. Tenetur veniam quas quia, corporis labore reprehenderit natus officiis.   
          </Card.Text>


          <Base64Downloader
    base64={base642}
    downloadName='Results'
    Tag="a"
    extraAttributes={{ href: '#' }}
    className="my-class-name"
    style={{ color: 'orange' }}
    onDownloadSuccess={() => console.log('File download initiated')}
    onDownloadError={() => console.warn('Download failed to start')}
>
    View Results
</Base64Downloader>
        </Card.Body>
      </Card>

)
}))}
    </div>
  )
}

export default Academics