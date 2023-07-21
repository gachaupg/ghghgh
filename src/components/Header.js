import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import Button from './Button'
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import decode from "jwt-decode";

const Header = () => {
  const [show, setShow] = useState(true);
  const [search, setSearch] = useState("");
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = user?.token;

  if (token) {
    const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      dispatch(setLogout());
    }
  }

 

  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <MDBNavbar sticky="top" expand="lg" style={{ backgroundColor: "black" }}>
      <MDBContainer>
        <MDBNavbarBrand
          href="/"
          style={{ color: "white", fontWeight: "600", fontSize: "22px" }}
        >
          BBHS
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toogle navigation"
          onClick={() => setShow(!show)}
          style={{ color: "#606080" }}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={show} navbar>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            {user?.result?._id && (
              <h5 style={{ marginRight: "30px", marginTop: "27px" }}>
                Logged in as: {user?.result?.name}
              </h5>
            )}
            <MDBNavbarItem>
              <Button/>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href="/">
                <p className="header-text">Home</p>
              </MDBNavbarLink>
            </MDBNavbarItem>  <MDBNavbarItem>
              <MDBNavbarLink href="/about">
                <p className="header-text">About</p>
              </MDBNavbarLink>
            </MDBNavbarItem>  <MDBNavbarItem>
              <MDBNavbarLink href="/library">
                <p className="header-text">Library</p>
              </MDBNavbarLink>
            </MDBNavbarItem>  <MDBNavbarItem>
              <MDBNavbarLink href="/academics">
                <p className="header-text">Academics</p>
              </MDBNavbarLink>
            </MDBNavbarItem>  <MDBNavbarItem>
              <MDBNavbarLink href="/tenders">
                <p className="header-text">Tenders</p>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/contact">
                <p className="header-text">Contact</p>
              </MDBNavbarLink>
            </MDBNavbarItem>

           
            {/* {user?.result?._id ? (
              <MDBNavbarItem>
                <MDBNavbarLink href="/login">
                  <p className="header-text" onClick={() => handleLogout()}>
                    Logout
                  </p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            ) : (
              <MDBNavbarItem>
                <MDBNavbarLink href="/login">
                  <p className="header-text">Login</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            )} */}
          </MDBNavbarNav>
          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
