import { NavLink } from "react-router-dom";
import "./navbar.css"
import nlogo from "../../../files/Images/nlogo.png";
import { DarkMode } from '../DarkMode'
import { BiSearch } from "react-icons/bi";

export const Navbar = () => {
  // local storage
  var gettheme = window.localStorage.getItem('theme');
  if (gettheme == null) {
    window.localStorage.setItem('theme', true);
  }
  // Colors || true = dark
  var darkcolor = "#191b1b"
  var lightcolor = '#fff'
  const toggleTheme = () => {
    //  if darkmode
    if (window.localStorage.getItem('theme') == 'true') {
      console.log('handlelight')
      document.body.style.background = lightcolor;
      window.localStorage.setItem('theme', false)
    }
    //  if lightmode
    else if (window.localStorage.getItem('theme') == 'false') {
      console.log('handledark')
      document.body.style.background = darkcolor;
      window.localStorage.setItem('theme', true)
    }
    //  if anything else
    else {
      document.body.style.background = darkcolor;
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{ alignItems: 'center' }}>

            <li className="nav-item">
              <NavLink className="nav-link" to="/homein">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/tvshows">TV Shows</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">Movies</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/mylist">My List</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/terms">Terms</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

            <li>
              <form class="d-flex">
                <input class="form-control mx-2" type="search" placeholder="Search" aria-label="Search" style={{ height: '30px' }} />
                <button class="btn btn-outline-dark mx-2" type="submit" style={{ height: '30px', display: 'flex', alignItems: 'center' }}><BiSearch /></button>
              </form>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">Profile</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">LogOut</NavLink>
            </li>

            <li className="nav-item" onClick={toggleTheme} style={{ justifySelf: 'flex-end' }}>
              <DarkMode />
            </li>


          </ul>

        </div>

      </div>
    </nav>
  );
};

