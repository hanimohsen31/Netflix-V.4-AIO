import React from 'react'
import { useHistory } from 'react-router-dom';

function EpisodeListItem(props) {
  const video = props.fu


  const axios_url=props.axios_url;
  console.log('last print',axios_url)
  const history = useHistory();
  
  // const handleClick = (event) =>{ 
  //   event.preventDefault();
  //   history.push({pathname:"/details",state: {axios_url:axios_url}});}

  const handlepreview = (event) => {
    event.preventDefault();
    history.push({ pathname: "/preview", state: { vidsrc: video.video_file } });
  }

    return (
        <div className="row l-item" >
          <h2>{video.eps_num}</h2>
          <a onClick={handlepreview}>
            <img className="col col-md-3 col-lg-2  ep_img m" src={video.image} alt='' />
          </a>
          <div className="col m">
            <div className="mb">
              <h2 className="ep-title">{video.title}</h2>
            </div>
            <p>{video.description}</p>
          </div>
        </div>
    )
}

export default EpisodeListItem
