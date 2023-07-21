import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from './Button'
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar 
    // className='collapse'
    sticky="top"
    style={{ color:'black'}}
   bg="light" expand="lg" class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <Container>
        <div className="nav-items-sepate">
          <div className="one">
                    <Navbar.Brand href="/"  className='textss'>BBHS</Navbar.Brand>

          </div>
          <div className="two">
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav" style={{backgroudColor:'white'}}   >
          <Nav className="me-auto">
          <Button className='b' />  
          <Nav.Link href="/" style={{color:'black'}} className='texts'>Home</Nav.Link>
          
<Nav.Link href="/about" style={{color:'black'}} className='texts'>About</Nav.Link>
<Nav.Link href="/library" style={{color:'black'}} className='texts'>Our Library</Nav.Link>
<Nav.Link href="/academics" style={{color:'black'}} className='texts'>Academics</Nav.Link>
<Nav.Link href="/tenders" style={{color:'black'}} className='texts'>Tenders</Nav.Link>

<Nav.Link href="/contact" style={{color:'black'}} className='texts'>Contact Us</Nav.Link>
   
          </Nav>
        </Navbar.Collapse>
          </div>
        </div>

        
      </Container>
    </Navbar>
  );
}

export default BasicExample;





















// import React, { useState, useEffect } from "react";
// import { HashLink as Link } from 'react-router-hash-link'
// import * as Icons from "react-icons/fa";
// import "./topbar.css";
// import Button from "./Button";
// import { navItems } from "./NavItems.js";
// import Dropdown from "./Dropdown";
// import Navbar from 'react-bootstrap/Navbar'

// function Navbars() {
//   const [mobile, setMobile] = useState(false);
//   const [sidebar, setSidebar] = useState(false);
//   const [dropdown, setDropdown] = useState(false);

//   useEffect(() => {
//     if (window.innerWidth < 1065) {
//       setMobile(true);
//     }
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 1065) {
//         setMobile(true);
//       } else {
//         setMobile(false);
//         setSidebar(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <Navbar>
//       <nav className="navbar">
//         <Link to="/" className="navbar-logo" onClick={() => setSidebar(false)}>
//           <Icons.FaPiedPiper style={{color:'white'}} />
//           BBHS
//         </Link>
        
//        {!mobile && <> <Button /></>} 
//         {!mobile && (
//           <ul className="nav-items">
//             {navItems.map((item) => {


  

//               return (
//                 <>
                
//                 <li key={item.id} className={item.nName}>
//                   <Link smooth to={item.path}>
                    
//                     <span>{item.title}</span>
//                   </Link>
//                 </li></>
//               );
//             })}
//           </ul>
//         )}


        

//         {mobile && (
//           <div className="sidebar-toggle">
//             {sidebar ? (
//               <Icons.FaTimes
//                 className="sidebar-toggle-logo"
//                 onClick={() => setSidebar(!sidebar)}
//               />
//             ) : (
//               <Icons.FaBars
//                 className="sidebar-toggle-logo"
//                 onClick={() => setSidebar(!sidebar)}
//               />
//             )}
//           </div>
//         )}
//       </nav>

//       <div className={sidebar ? "sidebar active" : "sidebar"}>
//         <ul className="sidebar-items">
//           {navItems.map((item) => {
//             return (
//               <li
//                 key={item.id}
//                 className={item.sName}
//                 onClick={() => setSidebar(false)}
//               >
//                 <Link to={item.path}>
//                   {/* {item.icon} */}
//                 {item.title}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//         {/* <Button onClick={() => setSidebar(false)} /> */}
//       </div>
//     </Navbar>
//   );
// }

// export default Navbars;
