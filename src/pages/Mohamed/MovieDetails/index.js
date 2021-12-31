import React from "react";
import Banner from "../../../components/Mohamed/Banner";
import Details from "../../../components/Mohamed/Details/";
import EpisodesList from "../../../components/Mohamed/EpisodesList";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ApiContext } from "../../../Context/ApiContext";

export const MovieDetails = (props) => {
  document.body.style.background = "#191b1b";

  // const apicontext = useContext(ApiContext);

  const location = useLocation();
  const vid = location.state.vid;
  const episodes = location.state.episodes;
  // const [vid, setvideo] = useState([
  //   series
  //     ? apicontext.episodes.find((entry) => entry.id == vid_id)
  //     : apicontext.movies.find((entry) => entry.id == vid_id),
  // ]);
  // useEffect(() => {
  //   setvideo(

  //        apicontext.movies.find((entry) => entry.id == vid_id)
        
  //   );
  

  // }, [vid_id]);
  console.log("viddeo" + vid);
  console.log("viddeo" + episodes);
  return (
    <div className="container">
      <Banner vid={vid} />
      <Details vid={vid} />

      <EpisodesList
        vid={episodes}
      />
    </div>
  );
};
