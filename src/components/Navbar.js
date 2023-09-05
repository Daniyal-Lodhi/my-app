// Shortcut rfc
// import React, { useState } from 'react'

// Shortcut impt
import PropTypes from 'prop-types'
import {Link } from "react-router-dom";

export default function Navbar(props) {
  



  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Text Ability</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Action</Link></li>
                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to='/'>Disabled</Link>
            </li>
          </ul>
          <div class="form-check form-switch">
            <input class="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label class={`form-check-label text-${props.txtTheme}`} for="flexSwitchCheckDefault">Dark mode</label>
          </div>
          <div className="d-flex">
          <div className="mx-2 rounded bg-primary" onClick={()=>{props.togglemode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          <div className="mx-2 rounded bg-success" onClick={()=>{props.togglemode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          <div className="mx-2 rounded bg-warning" onClick={()=>{props.togglemode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          <div className="mx-2 rounded bg-danger" onClick={()=>{props.togglemode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          
          </div>
          
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string, /* ptc ,is se title me string k ilawa kuch aur put kia to error ayega*/
};

Navbar.defaultProps = {
  title: "yaar title to set krdyy"
}
