
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
  
function App() {
    const navigate=useNavigate()
    const [email,setEmail]=useState(true)
    return (
        <div  className="top-quick-links">
            <h4>
                
            </h4>
            <Dropdown style={{backgroundColor:'blueviolet' ,color:'red'}} className='dropdown' title="quicklinks ...">
               
                <Dropdown.Item as="a" href=
                '/login'>
                   <p className="text">Teachers</p> 
                </Dropdown.Item>
               
                
  
                <Dropdown.Item as="a" href=
                '/login'>
                 <p className="text"> Students</p>  
                </Dropdown.Item>
  
                <Dropdown.Item as="a" href=
                '/login'>
                   <p className="text"> Admin</p>
                </Dropdown.Item>
            </Dropdown>
        </div>
    );
}
  
export default App;