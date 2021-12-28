import React, { useEffect, useState } from "react";
import "./Banner.css"
import { FaPlay, FaWindowClose } from "react-icons/fa"
import { AiFillLike, AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai"
import axios from "axios";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";

// import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';

function Banner(props) {
  const video = props.vid
  // console.log(video.title)
  const history = useHistory();
  const [like, setLike] = useState()
  const [dislike, setDisLike] = useState()
  const [myList, setMyList] = useState()

  const handleClick = (event) => {
    event.preventDefault();
    history.push({ pathname: "/preview", state: { vidsrc: video.video_file } });
  }

  const handlelike = async () => {
    const response = await axios.post('http://localhost:8000/api/like', {
      id: video.id,
      token: localStorage.getItem('token')
    }).then(function (response) {
      setLike(response.data.statuslike)
      setDisLike(response.data.statusdislike)
    })
  }

  const handdislelike = async () => {
    const response = await axios.post('http://localhost:8000/api/dislike', {
      id: video.id,
      token: localStorage.getItem('token')
    }).then(function (response) {
      setLike(response.data.statuslike)
      setDisLike(response.data.statusdislike)
    })
  }

  const handlemylist = async () => {
    const response = await axios.post('http://localhost:8000/api/mylist', {
      id: video.id,
      token: localStorage.getItem('token')
    }).then(function (response) {
      setMyList(response.data.statusmylist)
    })
  }


  useEffect(() => {

    const response = axios.post('http://localhost:8000/api/getlike', {
      id: video.id,
      token: localStorage.getItem('token')
    }).then(function (response) {
      setLike(response.data.status)

    const response1 = axios.post('http://localhost:8000/api/getdislike', {
      id: video.id,
      token: localStorage.getItem('token')
    }).then(function (response1) {
      setDisLike(response1.data.status)
    })

    })

    const response2 = axios.post('http://localhost:8000/api/getmylist', {
      id: video.id,
      token: localStorage.getItem('token')
    }).then(function (response2) {
      setMyList(response2.data.status)
    })

  });

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
            {like == true && <AiTwotoneLike onClick={handlelike} className="icons iconx2" style={{ color: '#fff' }} />}
            {like == false && <AiTwotoneLike onClick={handlelike} className="icons iconx2" />}

            {dislike == true && <AiTwotoneDislike onClick={handdislelike} className="icons iconx3" style={{ color: '#fff' }} />}
            {dislike == false && <AiTwotoneDislike onClick={handdislelike} className="icons iconx3" />}

            {myList == true && <AiOutlinePlusCircle onClick={handlemylist} className="icons iconx4" style={{ color: '#fff' }} />}
            {myList == false && <AiOutlinePlusCircle onClick={handlemylist} className="icons iconx4" />}

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
