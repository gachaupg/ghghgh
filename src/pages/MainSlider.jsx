import React, { useState,useEffect } from 'react'
import {Carousel} from 'react-bootstrap'
import axios from 'axios'
const HeroSlider = () => {
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
          const res= await axios.get(`https://butere.onrender.com/news`) 
        res.data.sort(compare)
        setTours(res.data) 
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
        .
            <Carousel className='main-slider'>
                <Carousel.Item interval={7000}>
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                    <h2>Perfomance Of Our School</h2>
                    <img
                    
                    className='main-slider'
                        src="https://www.knqa.go.ke/wp-content/uploads/2021/04/EvyhdukXYAQRtNQ.jpg"
                        alt="First slide"
                    />
                    
                    <Carousel.Caption>
                        <div className="slide-sep">
                       
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                <h2 style={{color:'black'}}>{users[0]?.title}</h2>
                    <img

                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1480688/pexels-photo-1480688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        
                        <p className='style'>{users[0]?.desc}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1480687/pexels-photo-1480687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1480689/pexels-photo-1480689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HeroSlider