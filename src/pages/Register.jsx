import React, { useState, useEffect } from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register } from "../redux/features/authSlice";

const initialState = {

  email: "",
  password: "",
  name:'',
  clas:'',
  role:''
};

const Register = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { email, password,name,role,clas } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();
console.log('values', formValue);
  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (email && password && name&&role&&clas ) {
      dispatch(register({ formValue, navigate, toast }));
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div
    style={{
      margin: "auto",
      padding: "1rem",
      width:'100%',
      alignContent: "center",
      flexDirection:'column',
      gap:'2rem',
     display:'flex',
     alignItems:'center',
     justifyContents:'center'
    }} className='home-main'>
      
     
        <MDBIcon fas icon="user-circle" className="fa-2x" />
        <h5>Sign Up</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
          <div className="col-md-9">
              <MDBInput
              
                label="Name"
                type="name"
                value={name}
                name="name"
                onChange={onInputChange}
                required
                invalid
                validation="Please provide name"
              />
            </div>
           
            <div className="col-md-9">
              <MDBInput
                label="Email"
                type="email"
                value={email}
                name="email"
                onChange={onInputChange}
                required
                invalid
                validation="Please provide email"
              />
            </div>
            <div className="col-md-9">
              <MDBInput
                label="Password"
                type="password"
                value={password}
                name="password"
                onChange={onInputChange}
                required
                invalid
                validation="Please provide password"
              />
            </div>
            <div className="col-md-9">
              <MDBInput
                label='role eg Student,Teacher,Sec,Bursor,DP'
                type="text"
                value={role}
                name="role"
                onChange={onInputChange}
                placeholder='role eg Student,Teacher,Sec,Bursor,DP'
                required
                invalid
                validation="Please provide role"
              />
            </div>
            <div className="col-md-9">
              <MDBInput
                label='role eg Student,Teacher,Sec,Bursor,DP'
                type="text"
                value={clas}
                name="clas"
                onChange={onInputChange}
                placeholder='role eg Student,Teacher,Sec,Bursor,DP'
                required
                invalid
                validation="Please provide role"
              />
            </div>
           
            
            <div className="col-9">
              <MDBBtn style={{ width: "100%" }} className="mt-2">
                {loading && (
                  <MDBSpinner
                    size="sm"
                    role="status"
                    tag="span"
                    className="me-2"
                  />
                )}
                Register
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/login">
            <p style={{fontSize:'1.3rem',marginBottom:'1rem'}}>Already have an account ? Sign In</p>
          </Link>
        </MDBCardFooter>
     
    </div>
  );
};

export default Register;
