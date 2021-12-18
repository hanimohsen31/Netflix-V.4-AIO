import React from "react";
import "./EpisodesList.css";
import EpisodeListItem from '../EpisodeListItem/index';

function EpisodesList() {
  return (
    <>
      <div className="l-items">
          <EpisodeListItem/>
        <div className="hr">
          <hr />
        </div>
        <EpisodeListItem/>
        <div className="hr">
          <hr />
        </div>
        <EpisodeListItem/>
        <div className="hr">
          <hr />
        </div>
        <EpisodeListItem/>
        
      </div>
    </>
  );
}

export default EpisodesList;
