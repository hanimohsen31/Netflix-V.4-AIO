import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { CardPhoto } from '../CardPhoto/index';

export const Grid2 = (props) => {
  var gettheme = window.localStorage.getItem('theme');
  const [vids, setVids] = useState([]);
  useEffect(() => {
    const response = axios.post(props.axios_url, { token: localStorage.getItem('token') })
    response.then(
      function (response1) {
        if (response.data != 'None') {
          setVids(response1.data)
        }
        else {
          setVids('None')
        }
      });
  }, [])

  // here we still need some fucking promisses handelling 
  let vid = document.querySelectorAll('video')
  for (let i = 0; i < vid.length; i++) {
    vid[i].addEventListener('mouseenter',
      function (e) {
        vid[i].play()
      })
    vid[i].addEventListener('mouseleave',
      function (e) {
        vid[i].load()
      })
    vid[i].addEventListener('ended',
      function () {
        vid[i].load();
      })
  }

  return (
    <>
      <div className="container-fluid" style={{ margin: '50px auto' }}>
        <h3 style={{ color: "#777", margin: '10px' }}>{props.slider_name}</h3>
        <div className="grid-cards">
          {vids != 'None' ? vids.map((p) => (
            <CardPhoto id={p.id} title={p.title} description={p.description}
              vidsrc={p.video_file} imgsrc={p.image} rate={p.rate}
              season_num={p.season_num} eps_num={p.eps_num}
              show_start={p.show_start} cat1={p.cat1} cat2={p.cat2} cat3={p.cat3}
              age={p.age} quality={p.quality}
              axios_url={`http://127.0.0.1:8000/api/video/${p.title}`}
            />
          )) : <h3>No Thing in your List yet</h3>}
        </div>
      </div>
    </>
  )
}
