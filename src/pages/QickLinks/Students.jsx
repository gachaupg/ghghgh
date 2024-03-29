import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Base64Downloader from 'common-base64-downloader-react';
import { Link } from 'react-router-dom'
import { getProjectsByUser } from '../../redux/features/projectSlice'
import Form from './Form'
const Students = () => {
  const dispatch=useDispatch()
  const {projects,loading}=useSelector((state)=>({...state.project}))
  const {user}=useSelector((state)=>({...state.auth}))
  const[show,setShow]=useState(true)
  
  const userId =user?.email?._id
useEffect(() => {
if(userId){
 dispatch(getProjectsByUser(userId)) 
}

}, [userId])

   

const [users,setTours]=useState([]);
// const base64 =users[0].imageFile
    // 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNv1OCegAAAAMSURBVBhXY/jPYAwAAzQBM849AKsAAAAASUVORK5CYII=';

    const [revision,setRevision]=useState([]);


    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get(`https://butere.onrender.com/student/userStudents/${userId}`)
          
        // res.data.sort(compare)
        setTours(  res.data)
        console.log(users[0].imageFile);
        
        } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])

          useEffect(()=>{
            async function fetchData(){
            try {
              const res= await axios.get(`https://butere.onrender.com/revisions`)
              
            // res.data.sort(compare)
            setRevision(  res.data)
            console.log(users[0].imageFile);
            
            } catch (error) {
              console.log(error);
              
            }
            }
            fetchData()
              },[])


  return (
    <div className="general-pages">
{!users[0]?<>
<h2><Form/> </h2>

{/* <Base64Downloader
    base64={base64}
    downloadName="1x1_red_pixel"
    Tag="a"
    extraAttributes={{ href: '#' }}
    className="my-class-name"
    style={{ color: 'orange' }}
    onDownloadSuccess={() => console.log('File download initiated')}
    onDownloadError={() => console.warn('Download failed to start')}
>
    Click to download
</Base64Downloader> */}

</>:''}


{users.map((i)=>{

})}

{users && users.map((data)=>{
  return(

  
  <>
    <div className="general-topbar">
      
      <div className="logo"><img src={data.imageFile} alt=""  className='image-logo'/></div>
<div className="personal-profile">
  <h5>Name:{user?.email?.name}</h5>
  <h5>admNo:{data.adm}</h5>
  <h5>Class:{users[0].clas}</h5>
  <button className="btn">
    <Link to='/middle'>
      Check Assignments
    </Link>
  </button>
</div>
    </div>

    <div className="activities">
        <div className="students-titles">
          <h4>Activities</h4>
            <h6>sports:{data.activity}</h6>
        <h6>clubs:{data.club}</h6>
        
        <h6>Achievements: {data.archievements}</h6> 
        </div>
        <div className="displine">
            <h4>Discipline review: 
            {/* <a href='data:image/jpeg;base64,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' download>Click to download</a> */}

★★★
</h4>
        </div>
        <div className="revision-materials">
      <div className="sepaerate">

<h4>RevisionMaterials</h4>
{users.map((i)=>{
  return(
    <>
    
    {revision.map((rev)=>{
      return(
        <>
        
        {i.clas===rev.class ? <>
          <Base64Downloader
    base64={rev.imageFile}
    downloadName={rev.subject}
    Tag="a"
    extraAttributes={{ href: '#' }}
    className="my-class-name"
    style={{ color: 'orange' }}
    onDownloadSuccess={() => console.log('File download initiated')}
    onDownloadError={() => console.warn('Download failed to start')}
>
    {rev.subject}
</Base64Downloader>
        
        </>
        :''}
        </>
      )
    })}
    
    </>
  )
})}


        


 


      </div>
           
{/* <div className="seo">Physics 
Geography  
History
CRE
Woodwork 
Agriculture 
Computer Studies 

</div>           */}

      
    </div>
       
    </div></>
   ) })}
    </div>
  )
}

export default Students