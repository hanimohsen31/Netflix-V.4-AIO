import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./footerinner.css";

export const FooterInner = () => {
  var gettheme = window.localStorage.getItem('theme');


  const handleClick = (e) => {
    e.preventDefault()

  }
  
  return (
    <>
      <footer id="Footer" className="myfooter">
        
      { gettheme == 'true' &&  <style> backgroundColor = '#191b1b' </style> }
      { gettheme == 'false' &&  <style> backgroundColor = '#fff' </style> }

        <div className="container-fluid">


        <div className="container ">
          <div className="row row1">
            <div className="col-12 icos">

              <a href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw" style={{textDecoration:'none'}}>
                <FontAwesomeIcon icon={faYoutube} className="youtube" />
              </a>

              <a href="https://www.facebook.com/netflixmiddleeastnorthafrica/">
                <FontAwesomeIcon icon={faFacebook} className="facebook" />
              </a>
            </div>
          </div>

          <div className="row row2">

            <div className="x col-sm-12 col-md-6 col-lg-4">
              <ul className="mylist">
                <li>
                  <NavLink to="/" onClick={handleClick} >Audio and Subtitle</NavLink>
                </li>
                <li>
                  <NavLink to="/" onClick={handleClick}>Media Center</NavLink>
                </li>
                <li>
                  <NavLink to="/" onClick={handleClick}>Privacy</NavLink>
                </li>
                <li>
                  <NavLink to="/" onClick={handleClick}>Contact Us</NavLink>
                </li>
              </ul>
            </div>

            <div className="x col-sm-12 col-md-6 col-lg-4">
              <ul className="mylist">
                <li>
                  <NavLink to="/" onClick={handleClick}>Help Center</NavLink>
                </li>
                <li>
                  <NavLink to="/" onClick={handleClick} >Jobs</NavLink>
                </li>
                <li>
                  <NavLink to="/" onClick={handleClick}> Cookies and Preferences </NavLink>
                </li>
              </ul>
            </div>

            <div className="x col-sm-12 col-md-6 col-lg-4">
              <ul className="mylist">
                <li>
                  <NavLink to="/" onClick={handleClick}>Gift Cards</NavLink>
                </li>
                <li>
                  <NavLink to="/terms">Terms of Use</NavLink>
                </li>
              </ul>
            </div>

          </div>

          <div className="row stamp">
            <div className="col-sm-12">
              <span>
                <b>&copy;</b> 1997-2021 Netflix, Inc.
              </span>
            </div>
          </div>

        </div>
        </div>
      </footer>
    </>
  );
};
