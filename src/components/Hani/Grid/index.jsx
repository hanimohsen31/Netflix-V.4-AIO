import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles.css";


import { CardPhoto } from "../CardPhoto/index";

SwiperCore.use([Pagination, Navigation]);

export const Grid = (props) => {

  const vids = props.videos;
console.log(vids)
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
        <div className="grid-cards">
          {vids.map((p) => (
            <CardPhoto
                  id={p.id}
                  title={p.title}
                  description={p.description}
                  vidsrc={p.video_file}
                  imgsrc={p.image}
                  rate={p.rates}
                  season_num={p.season_num}
                  eps_num={p.eps_num}
                  show_start={p.show_start}
                  cats={p.categories}
                  series={p.series}
                  series={p.series}
                  is_added_to_myList={p.added}
            />
          ))}
        </div>
      </div>
    </>
  );
};
