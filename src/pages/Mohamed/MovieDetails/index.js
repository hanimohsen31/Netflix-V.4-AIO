import React from "react";
import Banner from "../../../components/Mohamed/Banner";
import Details from "../../../components/Mohamed/Details/";
// import EpisodesList from "../../../components/Mohamed/EpisodesList";
// import ScardsList from "../../../components/Mohamed/ScardsList/index";
// import TrailerCardList from "../../../components/Mohamed/TrailerCardList";
// import AboutMovie from "../../../components/Mohamed/AboutMovie/index";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";


export const MovieDetails = (props) => {
  const location = useLocation();
  const axios_url = location.state.axios_url;
  document.body.style.background = "#191b1b";
  const [vid, setVid] = useState([]);
  // console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +axios_url);
  useEffect(() => {
    axios.get(axios_url).then((result) => {
      setVid(result.data[0]);
    });
  }, []);

  console.log(vid);
  return (
      <div className="container">
        <Banner vid={vid} />
        <Details vid={vid} />
        {/* {vid.type === "Series" ? <EpisodesList vid={vid} /> : <div></div>} */}
      </div>
  
  );
};
