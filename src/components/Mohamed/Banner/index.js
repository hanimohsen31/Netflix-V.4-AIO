import React from "react";
import "./Banner.css"
import {FaPlusCircle, FaPlay,FaThumbsUp, FaThumbsDown, FaWindowClose, FaVolumeMute} from "react-icons/fa"
// import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';

function Banner(props) {
  const video = props.vid
console.log(video.title)
const history = useHistory();
  
const handleClick = (event) =>{ 
  event.preventDefault();
  history.push({pathname:"/preview",state: {vidsrc:video.video_file}});}

  return (
    <>
      <header
        className=" banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${video.image})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner-contents">
          <h1 className="banner-title">{video.title}</h1>
    
          {/* <h1 className="banner-description">{video.description}</h1> */}
      <div className="banner-buttons">
            <button className="banner-button" onClick={handleClick}> <FaPlay /> Play</button>
              {/* <FaPlusCircle className="icons" /> 
              <FaThumbsUp className="icons"/>
              <FaThumbsDown className="icons"/>
              <FaVolumeMute className="icons icon-mute"/> */}
              <FaWindowClose className="icons iconx"/>
            
            {/* <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
       <div>
         <FaTwitter />
       </div>
    </IconContext.Provider> */}
            {/* <button className="banner-button">My List</button> */}

          </div>
        </div>
        <div className="  banner-fadebottom "></div>
      </header>
    </>
  );
}

export default Banner;
