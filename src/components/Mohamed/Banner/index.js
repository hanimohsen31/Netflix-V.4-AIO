import React, { useEffect, useState } from "react";
import "./Banner.css"
import {  FaPlay, FaWindowClose } from "react-icons/fa"
import {  AiFillLike, AiTwotoneLike } from "react-icons/ai"
import axios from "axios";

// import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';

function Banner(props) {
  const video = props.vid
  // console.log(video.title)
  const history = useHistory();
  const [like,setLike] = useState()

  const handleClick = (event) => {
    event.preventDefault();
    history.push({ pathname: "/preview", state: { vidsrc: video.video_file } });
  }

  const handlelike =  async() => {
    const response= await axios.post('http://localhost:8000/api/like', {
      id: video.id,
      token : localStorage.getItem('token')
    }).then((response) => setLike(response.data.status)).then((response) => setLike(response.data.status))
  }

  useEffect(() => {
    const response=  axios.post('http://localhost:8000/api/getlike', {
      id: video.id,
      token : localStorage.getItem('token')
    }).then((response) => setLike(response.data.status))
  }, [like]);



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

          <div className="banner-buttons">
            <button className="banner-button" onClick={handleClick}> <FaPlay /> Play</button>
            {/* <button className="banner-button" onClick={handleClick}> <AiTwotoneLike />Like</button> */}
            {/* like */}
            {like == true && <AiTwotoneLike onClick={handlelike} className="icons iconx2" />}
            {like == false && <FaWindowClose onClick={handlelike} className="icons iconx2" />}
            {/* go back */}
            <FaWindowClose onClick={() => history.goBack()} className="icons iconx" />

          </div>
        </div>
        <div className="  banner-fadebottom "></div>
      </header>
    </>
  );
}

export default Banner;
