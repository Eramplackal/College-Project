import React from 'react';
import { NavLink } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
 // Import Link if you're using react-router

export default function Navbar() {
  return (
    <>
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">NKT College</NavLink>    
          <li className="nav-item d-block d-sm-none mobile-nav">
            <NavLink className="nav-link" to="#" style={{ color: '#00a9e0', fontWeight: 500 }}>
              Pay Due
            </NavLink>
          </li>
          <li className="nav-item d-block d-sm-none mobile-nav">
            <NavLink className="nav-link" to="#" style={{ color: '#00a9e0', fontWeight: 500 }}>
              <i className="fa fa-user"></i>
            </NavLink>
          </li>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">ABOUT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/courses">COURSES</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">CONTACT US</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">BLOG</NavLink>
              </li>
              
            </ul>
            <form className="d-flex">
              <topnav className="d-sm-flex d-none">
                <div className="topnav-actions">
                  <NavLink to="/login" className="btn signup">Log in</NavLink>
                  <NavLink to="/auth/register" className="btn signup">Sign Up</NavLink>
                </div>
              </topnav>
            </form>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}
