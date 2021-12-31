import React from "react";
import { useHistory } from "react-router-dom";

function EpisodeListItem(props) {
  const video = props.fu;

  const history = useHistory();

  const handlepreview = (event) => {
    event.preventDefault();
    history.push({ pathname: "/preview", state: { vidsrc: video.video_file } });
  };

  return (
    <div className="container l-item">
      <div className="row">
        <div className="col1 col-sm-12 col-md-1 col-lg-1">
          <h2>{video.eps_num}</h2>
        </div>

        <a onClick={handlepreview} className="col2 col-sm-12 col-md-4 col-lg-3">
          <img
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
            className="text-align-center"
            src={video.image}
            alt=""
          />
        </a>

        <div className="col3 col-sm-12 col-md-7 col-lg-8">
          <div className="m-md-0">
            <h2 className="ep-title">{video.title}</h2>
          </div>
          <p>{video.description}</p>
        </div>
      </div>
    </div>
  );
}

export default EpisodeListItem;
