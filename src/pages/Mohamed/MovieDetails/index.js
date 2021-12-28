import React from "react";
import Banner from "../../../components/Mohamed/Banner";
import Details from "../../../components/Mohamed/Details/";
import EpisodesList from "../../../components/Mohamed/EpisodesList";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";


export const MovieDetails = (props) => {
  // Colors || true = dark
  var darkcolor = "#191b1b"
  var lightcolor = '#fff'
  if (window.localStorage.getItem('theme') == 'true') {
    document.body.style.background = darkcolor;
  }
  else if (window.localStorage.getItem('theme') == 'false') {
    document.body.style.background = lightcolor;
  }
  else {
    document.body.style.background = darkcolor;
  }
  
  const location = useLocation();
  const axios_url = location.state.axios_url;
  const [vid, setVid] = useState([]);
  
  const typeSelecttor = vid.map((p) => p.type)[0]

  useEffect(async () => {
    await axios.get(axios_url).then((result) => {
      setVid(result.data);
    });
  }, []);

  return (
    <div className="container">
      {vid.map((p) => (<Banner vid={p} />)).slice(0, 1)}
      {vid.map((p) => (<Details vid={p} />)).slice(0, 1)}
      {typeSelecttor === 'Series' ? (<EpisodesList vid={vid} />) : (<div></div>)}
    </div>

  );
};
