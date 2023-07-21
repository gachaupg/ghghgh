import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Base64Downloader from 'common-base64-downloader-react';

const Tenders = () => {
const[tenders,setTenders]=useState([])
const [users,setTours]=useState([]);
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
    const res= await axios.get(`http://localhost:5000/tender`)
    
  res.data.sort(compare)
  const result = res.data.filter((_, index) => index < 2);
  setTenders(  result)
  console.log('data',tenders);
  
  } catch (error) {
    console.log(error);
    
  }
  }
  fetchData()
    },[])


    useEffect(()=>{
      async function fetchData(){
      try {
        const res= await axios.get(`http://localhost:5000/tenderform`)
        
      // res.data.sort(compare)
      setTours(  res.data)
      console.log('data',tenders);
      
      } catch (error) {
        console.log(error);
        
      }
      }
      fetchData()
        },[])
    


  return (
    <div className='tenders'>
      <h4>Tenders</h4>
      <div className="tender-notice">
        {tenders.map((item)=>{
          return(
            <><div className="title-tender">
          <h3>{item.title}</h3>
        </div>
        <div className="tender-description">
          <p>{item.desc}</p>
          {users.map((i)=>{
          return(
            <Base64Downloader
            base64={i.imageFile}
            downloadName={i.title}
            Tag="a"
            extraAttributes={{ href: '#' }}
            className="my-class-name"
            style={{ color: 'orange' }}
            onDownloadSuccess={() => console.log('File download initiated')}
            onDownloadError={() => console.warn('Download failed to start')}
        >
            Apply
        </Base64Downloader>
          )
          })}
         
        </div>
            </>
          )
        })}
        
        
      </div>
    
    </div>
  )
}

export default Tenders