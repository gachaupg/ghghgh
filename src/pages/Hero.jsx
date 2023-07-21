import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import './Hero.css'
import axios from 'axios';
function App() {
  function compare(a,b){
    if(a._id <b._id){
      return 1
    }
    if(a._id >b._id){
      return -1
    }return 0
  }

  const [users,setTours]=useState([]);


  useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get(`https://butere.onrender.com/news`)
      
    res.data.sort(compare)
    setTours(  res.data)
    console.log('hero',users[0].title);
    
    } catch (error) {
      console.log(error);
      
    }
    }
    fetchData()
      },[])

  const data =
  
  
 
  [
   {
     id: 1,
     image:
       'https://res.cloudinary.com/pitz/image/upload/v1670049610/ae121c73-cdaa-43b5-96d7-803e793e564e_kzxdw8.jpg',
     name: 'School Life',
     title: 'Our School Life and Students Of BBHS',
     quote:
       'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
   },
   {
     id: 2,
     image:
       'https://images.pexels.com/photos/1577882/pexels-photo-1577882.jpeg?auto=compress&cs=tinysrgb&w=600',
     name: 'Contac us',
     view:'view our latest news',
     title: 'Latest News and Upcoming Events',
     quote:'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
   },
   {
     id: 3,
     image:
       'https://teacher.co.ke/wp-content/uploads/2019/12/Webp.net-resizeimage-13-min.jpg',
     name: '',
     title: 'Our Bus Service',
     quote:
       'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
   },
   {
     id: 4,
     image:
       'https://www.knqa.go.ke/wp-content/uploads/2021/04/EvyhdukXYAQRtNQ.jpg',
     name: 'Performance',
     title: 'Students  Performance Every Year',
     view:'view performance',
     quote:
       'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
   },
   {
     id: 4,
     image:
       'https://res.cloudinary.com/pitz/image/upload/v1670049610/9240ba92-c46d-4ec1-a988-c6dc94804a29_phl6ij.jpg',
     name: 'Performance',
     title: 'Our Classes and Teachers',
     quote:
       'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
   },
  
 ];
 


  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);
  const[number,setNumber]=useState(0)
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 9000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  const rows =  
        
          
    {
     
      digits:users[0]?.title,
      desc:users[0]?.desc,
    
     
    }
  

  







 
 
 


  return (
    <section className="section">
      
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote ,view} = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            
            <article  style={{display:'flex',alignItems:'center'}} className={position } key={id}>
   
             
              <p className="title1">
             
                {title==='view our latest news' ?
                (
                  users[0]?.title
                ):(
                  <h4 style={{textAlign:'center'}} className="title">{title}</h4>

                )}
              </p>

                <div className="hero">
                <div className="image">
                                <img src={image} alt={name} className="person-img" />
                                <p className="quote">{quote}</p>
                                {view ? (
                                  <button style={{marginBottom:'20rem', marginLeft:'3rem',
       padding:'1rem' ,color:'white'}} className="btns">
   <h5 style={{color:'white'}}> {view}</h5>
  </button>
                                ):''}
                                
 

  
       <FaQuoteRight className="icon" />
              </div>
                </div>
              {/* <h4>{name}</h4> */}
         
             
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
