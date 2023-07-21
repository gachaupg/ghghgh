import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {BsPeopleFill} from 'react-icons/bs'
import {FaMoneyCheckAlt} from 'react-icons/fa'
import { MdPeopleAlt, MdSchool } from 'react-icons/md'
import Base64Downloader from 'common-base64-downloader-react';
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const General = () => {
  const [users,setTours]=useState([]);
  const [user,setTour]=useState([]);

  const base642 =user[0]?.imageFile
  const base64 =users[0]?.imageFile
  useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get(`https://butere.onrender.com/fees`)
      
    // res.data.sort(compare)
    setTours(  res.data)
    console.log(users.length);
    
    } catch (error) {
      console.log(error);
      
    }
    }
    fetchData()
      },[])
      useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get(`https://butere.onrender.com/results`)
          
        // res.data.sort(compare)
        setTour(  res.data)
        console.log(users.length);
        
        } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])
    






  return (
    <div className='general'>
       <Card className='bootCard'>
<div className="items1">
<BsPeopleFill style={{color:'red'}}/>
  <p>
    <Link to='/tenders'>
      New Tenders
    </Link>
  </p>
</div>
<div className="items1">
<FaMoneyCheckAlt style={{color:'red'}}/>
  <p>
  <Base64Downloader
    base64={base64}
    downloadName='feesStructure'
    Tag="a"
    extraAttributes={{ href: '/' }}
    className="my-class-name"
    style={{ color: 'orange' }}
    onDownloadSuccess={() => console.log('File download initiated')}
    onDownloadError={() => console.warn('Download failed to start')}
>
   Fees Structure
</Base64Downloader>
  </p>
</div>
<div className="items1">
<BsPeopleFill style={{color:'red'}}/>
  <p>
    <Link to='/vacances'>
      New  Vacancies
    </Link>
  </p>
</div>
<div className="items1">
<MdSchool style={{color:'red'}}/>
  <p>
  <Base64Downloader
    base64={base642}
    downloadName='Results'
    Tag="a"
    extraAttributes={{ href: '/' }}
    className="my-class-name"
    style={{ color: 'orange' }}
    onDownloadSuccess={() => console.log('File download initiated')}
    onDownloadError={() => console.warn('Download failed to start')}
>
    Results
</Base64Downloader>
  </p>
</div>

       </Card>
      



       <Card className='bootCards' >
        <div className="items">
          <MdPeopleAlt style={{color:'red'}}/>
          <p>
          <Link to='/login'>
      Teachers Portal
    </Link>
          </p>
        </div>
        <div className="items">
          <MdPeopleAlt style={{color:'red'}}/>
          <p>
          <Link to='/login'>
      Students Portal
    </Link>
          </p>
        </div>
        <div className="items">
          <MdPeopleAlt style={{color:'red'}}/>
          <p>
          <Link to='/login'>
      Staff Portal
    </Link>
          </p>
        </div>
        <div className="items">
          <MdPeopleAlt style={{color:'red'}}/>
          <p>
          <Link to='/contact'>
       Contact
    </Link>
          </p>
        </div>
        
        

</Card>
        
            </div>
  )
}

export default General