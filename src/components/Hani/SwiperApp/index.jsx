import { Swiper } from "swiper/react/swiper";
import { SwiperSlide } from "swiper/react/swiper-slide";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles.css";
import { CardPhoto } from "../CardPhoto/index";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export const SwiperApp = (props) => {
  const vids = props.videos;

  let vid = document.querySelectorAll("video");
  for (let i = 0; i < vid.length; i++) {
    vid[i].addEventListener("mouseenter", function (e) {
      vid[i].play();
    });
    vid[i].addEventListener("mouseleave", function (e) {
      vid[i].load();
    });
    vid[i].addEventListener("ended", function () {
      vid[i].load();
    });
  }

  return (
    <>
      <div
        className="container-fluid"
        style={{ margin: "50px auto", background: "#191b1b" }}
      >
        <h3 style={{ color: "white", margin: "10px" }}>{props.slider_name}</h3>
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
          spaceBetween={5}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
        >
          {vids
            .map((vid) => (
              <SwiperSlide>
                <CardPhoto
   video={vid}
                />
              </SwiperSlide>
            ))
            .slice(0, 9)}
        </Swiper>
      </div>
    </>
  );
};
