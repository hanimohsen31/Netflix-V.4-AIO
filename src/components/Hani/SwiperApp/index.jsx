import { Swiper } from "swiper/react/swiper";
import { SwiperSlide } from "swiper/react/swiper-slide";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

import { CardPhoto } from '../CardPhoto/index';


// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export const SwiperApp = (props) => {
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
        console.log(result);
        console.log(result.request.responseURL);
      });
    }, []);

  return (
    <>
    <div className="container-fluid" style={{margin:'50px auto',background: '#191b1b' }}>
    <h3 style={{ color: "white",margin:'10px' }}>{props.slider_name}</h3>
    <Swiper
        breakpoints={{
          0: {
            width: 0,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1200: {
            width: 1200,
            slidesPerView: 4,
          },
        }}
        spaceBetween={5} slidesPerGroup={3}
        loop={true} loopFillGroupWithBlank={true} 
        pagination={{clickable: true,}}
        navigation={true} className="mySwiper"
      >

        {vids.map((p) => (
        <SwiperSlide>
          <CardPhoto id={p.id} title={p.title} description = {p.description} 
          vidsrc={p.video_file} imgsrc = {p.image} rate = {p.rates}
          season_num={p.season_num} eps_num = {p.eps_num}
          show_start={p.show_start} cat1={p.categories} cat2={p.cat2} cat3={p.cat3}
          axios_url={`http://127.0.0.1:8000/api/video/${p.id}/${p.eps_num == null ? 'movie':'episode'}`}
          />
        </SwiperSlide>
        )).slice(0,9)}

      </Swiper>
      </div>
    </>
  )}
