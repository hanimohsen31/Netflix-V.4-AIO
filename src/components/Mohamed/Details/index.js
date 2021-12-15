import React from "react";
import "./Details.css";
// import top10 from "../images";
function Details() {
  return (
    <div className="row movie-detail ">
      <div className="col col-sm-12 col-md-6 left-detail">
        <div className="ldetail-row1">
          <span className="matches m">99% Match</span>
          <span className="p-year m">2021</span>
          <span className="age m">18+</span>
          <span className="season-num m">1 Season</span>
          <span className="reselution m">HD</span>
        </div>

        <div className="ldetail-row2 flx">

          <img className="top10 m" src="/images/top10.jpg" alt=""/>
          <span className="position-num m ">#2 in Egypt Today</span>
        </div>

        <div className="ldetail-row3 m">
          "To carry out the biggest heist in history, a mysterious man called
          The Professor recruits a band of eight robbers who have a single
          characteristic: none of them has anything to lose.
        </div>
      </div>
      <div className="col col-sm-12 col-md-6 right-detail">
        <div className="rdetail-row1 mt flx"><p className="lbl">Cast: </p> <p className="txt m">Lee Jung-jae ,Gong Yoo and Lee Byung Hun</p></div>
        <div className="rdetail-row2 mt flx"><p className="lbl">Genres: </p> <p className="txt m">Survival,Thriller,Horror[1],Drama</p></div>
        <div className="rdetail-row3 mt flx"><p className="lbl">The Show is: </p> <p className="txt m">suspenful</p></div>
      </div> 
    </div>
  );
}

export default Details;
