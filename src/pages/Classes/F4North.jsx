import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import Base64Downloader from 'common-base64-downloader-react';

const F4North = () => {
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
        const res= await axios.get(`https://butere.onrender.com/stats/classes13`)
        
      // res.data.sort(compare)
      setTours(  res.data)
      console.log(users.length);
      
      } catch (error) {
        console.log(error);
        
      }
      }
      fetchData()
        },[])


    return (
        <>
        <h2>All Assignments</h2>
    
    
        <div className='posted-ass'>
          {users.map((i)=>{
            return(
    <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>{i.subject}</Card.Header>
            <Card.Body>
              <Card.Title>{i.class}</Card.Title>
              <Card.Text>
                
        <Base64Downloader
        base64={i.imageFile}
        downloadName={i.subject}
        Tag="a"
        extraAttributes={{ href: '#' }}
        className="my-class-name"
        style={{ color: 'orange' }}
        onDownloadSuccess={() => console.log('File download initiated')}
        onDownloadError={() => console.warn('Download failed to start')}
    >
        Click to download
    </Base64Downloader>
              </Card.Text>
            </Card.Body>
          </Card>
            )
          })}
    
          
          
         
        </div></>
      )
  
}

export default F4North