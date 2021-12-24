import React from "react";
import Banner from "../../../components/Mohamed/Banner";
import Details from "../../../components/Mohamed/Details/";
import { SwiperSlide } from "swiper/react/swiper-slide";
import {CardPhoto} from "../../../components/Hani/CardPhoto";
import SwiperApp from "../../../components/Hani/SwiperApp";
import EpisodesList from "../../../components/Mohamed/EpisodesList";
// import ScardsList from "../../../components/Mohamed/ScardsList/index";
// import TrailerCardList from "../../../components/Mohamed/TrailerCardList";
// import AboutMovie from "../../../components/Mohamed/AboutMovie/index";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";


export const MovieDetails = (props) => {
  const location = useLocation();
  const axios_url = location.state.axios_url;
  
  // console.log("comedy: ",axios_url)

  document.body.style.background = "#191b1b";

  const [ vid , setVid] = useState([]);

  useEffect(async() => {
    await axios.get(axios_url).then((result) => {
      setVid(result.data);
    });
  }, []);

  const typeSelecttor = vid.map((p) => p.series)[0]
  console.log('tyyyper',typeSelecttor)
  return (
      <div className="container">


          {vid.map((p) => (
            <Banner vid={p} />
          )).slice(0,1)}


        {vid.map((p) => (
            <Details vid={p} />
          )).slice(0,1)}


        {typeSelecttor != null ? (<EpisodesList vid={vid} /> ) : (<div></div>) }

        {/* {vid.map((p) => (
          <div className="#">
          <CardPhoto id={p.id} title={p.title} description = {p.description} 
          vidsrc={p.video_file} imgsrc = {p.image} rate = {p.rate}
          season_num={p.season_num} eps_num = {p.eps_num}
          show_start={p.show_start} cat1={p.cat1} cat2={p.cat2} cat3={p.cat3}
          axios_url={`http://127.0.0.1:8000/api/video/${p.title}`}
          />
          </div>
        ))} */}

      </div>
  
  );
};
