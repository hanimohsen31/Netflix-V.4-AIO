import React from "react";
import "./EpisodesList.css";
import EpisodeListItem from '../EpisodeListItem/index';

function EpisodesList(props) {
  console.log('nera',props.vid)
  return (
    <>
      {props.vid && <div className="l-items">

        {props.vid.map((p) => (
          <EpisodeListItem fu={p} 
           />
        ))}
        
      </div>}
    </>
  );
}

export default EpisodesList;
