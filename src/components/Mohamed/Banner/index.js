import React, { useEffect, useState } from "react";
import "./Banner.css";
import { FaPlay, FaWindowClose } from "react-icons/fa";
import { AiFillLike, AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import axios from "axios";

// import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

function Banner(props) {
  const video = props.vid;
  // console.log(video.title)
  const history = useHistory();
  const [like, setLike] = useState();
  const [dislike, setDisLike] = useState();

  const handleClick = (event) => {
    event.preventDefault();
    history.push({ pathname: "/preview", state: { vidsrc: video.video_file } });
  };

  const handlelike = async () => {
    const response = await axios
      .post(
        `http://localhost:8000/api/like/${
          video.eps_num == null ? "movie" : "episode"
        }`,
        {
          id: video.id,
          token: localStorage.getItem("token"),
        }
      )
      .then(function (response) {
        setLike(response.data.statuslike);
        setDisLike(response.data.statusdislike);
      })
      .catch((error) => {
        if (
          String(error).split(" ")[String(error).split(" ").length - 1] == "401"
        ) {
          history.push({ pathname: "/login" });
        }
      });
  };

  useEffect(() => {
    const response = axios
      .post(
        `http://localhost:8000/api/getlike/${
          video.eps_num == null ? "movie" : "episode"
        }`,
        {
          id: video.id,
          token: localStorage.getItem("token"),
        }
      )
      .then(function (response) {
        setLike(response.data.status);

        const response1 = axios
          .post(
            `http://localhost:8000/api/getdislike/${
              video.eps_num == null ? "movie" : "episode"
            }`,
            {
              id: video.id,
              token: localStorage.getItem("token"),
            }
          )
          .then(function (response1) {
            setDisLike(response1.data.status);
          })
          .catch((error) => {
            if (
              String(error).split(" ")[String(error).split(" ").length - 1] ==
              "401"
            ) {
              history.push({ pathname: "/login" });
            }
          });
      })
      .catch((error) => {
        if (
          String(error).split(" ")[String(error).split(" ").length - 1] == "401"
        ) {
          history.push({ pathname: "/login" });
        }
      });
  });
  const handdislelike = async () => {
    const response = await axios
      .post(
        `http://localhost:8000/api/dislike/${
          video.eps_num == null ? "movie" : "episode"
        }`,
        {
          id: video.id,
          token: localStorage.getItem("token"),
        }
      )
      .then(function (response) {
        setLike(response.data.statuslike);
        setDisLike(response.data.statusdislike);
      })
      .catch((error) => {
        if (
          String(error).split(" ")[String(error).split(" ").length - 1] == "401"
        ) {
          history.push({ pathname: "/login" });
        }
      });
  };

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
            <button className="banner-button" onClick={handleClick}>
              {" "}
              <FaPlay /> Play
            </button>
            {/* <button className="banner-button" onClick={handleClick}> <AiTwotoneLike />Like</button> */}
            {/* like */}

            {like == true && (
              <AiTwotoneLike
                onClick={handlelike}
                className="icons iconx2"
                style={{ color: "#fff" }}
              />
            )}
            {like == false && (
              <AiTwotoneLike onClick={handlelike} className="icons iconx2" />
            )}

            {dislike == true && (
              <AiTwotoneDislike
                onClick={handdislelike}
                className="icons iconx3"
                style={{ color: "#fff" }}
              />
            )}
            {dislike == false && (
              <AiTwotoneDislike
                onClick={handdislelike}
                className="icons iconx3"
              />
            )}
            {/* go back */}
            <FaWindowClose
              onClick={() => history.goBack()}
              className="icons iconx"
            />
          </div>
        </div>
        <div className="  banner-fadebottom "></div>
      </header>
    </>
  );
}

export default Banner;
