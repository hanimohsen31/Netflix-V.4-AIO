import img2 from "../../../files/Images/mh2.jpg";
import "./sectionreverse.css";

export const SectionReverse = () => {
  return (
    <>
    <div id='SectionReverse' className="container-fluid">
      <div className="section-reverse container">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="colcontetnt">
              <img src={img2} alt="" />
            </div>
          </div>

          <div className="col-sm-12 col-md-4">
            <div className="colcontetnt">
              <h1>Enjoy on your TV.</h1>
              <h3>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </h3>
            </div>
          </div>
        </div>
      </div>
      </div>

    </>
  );
};
