import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

import { CardPhoto } from '../CardPhoto/index';


// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export const Grid = (props) => {
  var gettheme = window.localStorage.getItem('theme');

    // here we still need some fucking promisses handelling 
    let vid = document.querySelectorAll('video')
    for (let i =0 ; i<vid.length ; i++){
      vid[i].addEventListener('mouseenter',
      function(e){
        vid[i].play()
      })    
      vid[i].addEventListener('mouseleave',
      function(e){
        vid[i].load()
      })
      vid[i].addEventListener('ended', 
      function() {
        vid[i].load();   
      })
    }

    const [vids, setVids] = useState([]);

    useEffect(() => {
      axios.get(props.axios_url).then((result) => {
        setVids(result.data);
      });
    }, []);

  return (
    <>
    <div className="container-fluid" style={{margin:'50px auto'}}>
    { gettheme == 'true' &&  <style> backgroundColor = '#191b1b' </style> }
      { gettheme == 'false' &&  <style> backgroundColor = '#fff' </style> }

    <h3 style={{ color: "white",margin:'10px' }}>{props.slider_name}</h3>
    <div className="grid-cards">

        {vids.map((p) => (
          <CardPhoto id={p.id} title={p.title} description = {p.description} 
          vidsrc={p.video_file} imgsrc = {p.image} rate = {p.rate}
          season_num={p.season_num} eps_num = {p.eps_num}
          show_start={p.show_start} cat1={p.cat1} cat2={p.cat2} cat3={p.cat3}
          age={p.age} quality={p.quality}
          axios_url={`http://127.0.0.1:8000/api/video/${p.id}`}
          />
          ))}
          </div>
          </div>
    </>
  )}
