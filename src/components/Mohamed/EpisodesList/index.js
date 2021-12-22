import React from "react";
import "./EpisodesList.css";
import EpisodeListItem from '../EpisodeListItem/index';

function EpisodesList(props) {
  console.log('nera',props.vid)
  return (
    <>
      <div className="l-items">

        {props.vid.map((p) => (
          <EpisodeListItem fu={p} axios_url={`http://127.0.0.1:8000/api/video/${p.id}`} />
        ))}
        
      </div>
    </>
  );
}

export default EpisodesList;
