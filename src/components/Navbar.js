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
          
          <div class="form-check form-switch ">
            <input class="form-check-input" onClick={() => props.togglemode(props.mode === 'light' ? 'dark' : 'light')} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label class={`form-check-label text-${props.txtTheme}`} for="flexSwitchCheckDefault">Dark mode</label>
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
