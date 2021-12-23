// this is src/components/navbar
import { NavLink } from "react-router-dom";
import "./navbar.css"
import nlogo from "../../../files/Images/nlogo.png";
import { useState } from "react";

export const Navbar = () => {
  // true = dark

 var darkcolor = "#191b1b"
 var lightcolor = '#fff'
 
 const toggleTheme = () => {

   console.log('just in toggle')
   console.log(window.localStorage.getItem('theme'))
   
   if (window.localStorage.getItem('theme') == 'true'){
    console.log('handlelight')
    document.body.style.background = lightcolor;
    window.localStorage.setItem('theme', false)
   } 

   else if (window.localStorage.getItem('theme') == 'false'){
    console.log('handledark')
    document.body.style.background = darkcolor;
    window.localStorage.setItem('theme', true)
   }

   else {
    document.body.style.background = darkcolor;
     console.log('A777aa')
   }
}

  return (
      <nav className="navbar navbar-expand-lg navbar-dark ">
      <div class="container-fluid">
      <NavLink className="navbar-brand" to="/"><img src={nlogo} alt="" id="nlogo" width="80" /></NavLink>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <NavLink className="nav-link" to="/homein">Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/tvshows">TV Shows</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/movies">Movies</NavLink>
          </li>

          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/mylist">My List</NavLink>
          </li> */}

          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/homeout">Welcome</NavLink>
          </li> */}
          
          <li className="nav-item">
            <NavLink className="nav-link" to="/terms">Terms</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">LogOut</NavLink>
          </li>
          <li>
            <button className="btn btn-outline-dark" onClick={toggleTheme}>Light</button>
          </li>



          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              <VscAccount size='20px' style={{ color: 'white' }} />
            </NavLink>
          </li> */}


        </ul>

      </div>

    </div>
    </nav>
  );
};

