import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { navItems } from "../components/NavItems";
import Navbar from '../components/Navbar';
import CartContainer from '../components/CartContainer';
import Modal from '../components/Modal';
import About from './About';
import Hero from './Hero';
import General from './General';
import Activities from './Activities';
import Summarypage from './Summarypage';
import { useNavigate } from 'react-router-dom';
import Facilities from './Facilities';
import Upcoming from './Upcoming';
import Speech from 'react-speech';
import SimpleSlider from './MainSlider'
const Home = () => {
  const {user}=useSelector((state)=>({...state.auth}))
  const navigate=useNavigate()
//  useEffect(()=>{

//   if(user){
//     navigate('/main')}
//      return navigate('/')

//   // {user ? navigate('/main'):navigate('/login') }

//  },[])
  return (
    <div className='home'>
      <h3 className='textss'>BUTERE BOYS HIGH SCHOOL</h3>
      <div className='home-main'>
      
     {user ? navigate('/main'):navigate('/') }
  </div> *
     
<Hero/>
{/* <Speech text="Welcome BUTERE BOYS HIGH SCHOOL" /> */}
{/* <Activities
title="Sports"
img='./ppp.png'
/>
<Activities
title="Dinning"
img='./ppp.png'
/>
<Activities
title="Academics"
img='./ppp.png'
/> */}
{/* <SimpleSlider/> */}
<hr />
<div></div>
<General/>

<hr />
<Upcoming/>
<hr />
<Activities/>
<hr />

<Facilities/>

</div>
  )
}

export default Home