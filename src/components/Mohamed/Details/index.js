import React from "react";
import "./Details.css";
// import top10 from "../images";
function Details(props) {
  const video = props.vid;
  console.log('hamada: ' ,video )

  return (
    <div className="row movie-detail ">
      <div className="col col-sm-12 col-md-6 left-detail flx align-items-start flex-column jusify-content-start">

        <div className="ldetail-row1 flx align-items-center ">
          <span className="matches m">Rate {(video.rate)}/10</span>
          {video.type === "Movie" ? (
            <span className="season-num m">Movie</span>
          ) : (
            <span className="season-num m">Season {video.season_num}</span>
          )}
          <span className="reselution m">HD</span>
        </div>

        {(video.rate / 10) * 100 >= 90 ? (
          <div className="ldetail-row2 flx align-items-center ">
            <img className="top10 m" src="/images/top10.jpg" alt="" />
            <span className="position-num m ">
              #{100 - (video.rate / 10) * 100} Of The Top 10 Today
            </span>
          </div>
        ) : (
          <div className="ldetail-row2 flx"></div>
        )}
      </div>

      <div className="col col-sm-12 col-md-6 left-detail">
        <div className="rdetail-row2 flx align-items-center">
          <p className="lbl">Genres: </p>{" "}
          <p className="txt m">{video.cat1}, {video.cat2}, {video.cat3}</p>
        </div>
      </div>
      <div className="ldetail-row3 m"><h3>Description</h3>{video.description}</div>

    </div>
  );
}

export default Details;
