import { FaPlayCircle } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import "./cardphoto.css";
import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { ApiContext } from "../../../Context/ApiContext";
import { AuthContext } from "../../../Context/authcontext";

export const CardPhoto = ({video}) => {
  let icoColor = "#d6d4d4";
  const apicontext = useContext(ApiContext);
  const authcontext = useContext(AuthContext);

  const [addToList, setAddToList] = useState(video.added);

  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();

    history.push({ pathname: "/details", state: { vid: video ,episodes:apicontext.episodes.filter((entry) => entry.series == video.series)} });
  };

  const handleAddMyList = async (event) => {
    event.preventDefault();
    console.log(authcontext.user);
    await apicontext
      .post(
        `http://127.0.0.1:8000/api/video/${video.id}/${
          video.eps_num == null ? "movie" : "episode"
        }/addtomylist`,
        {
          token: localStorage.getItem("token"),
        }
      )
      .then((response) => setAddToList(response.data.added))
      .catch((error) => {
        if (
          String(error).split(" ")[String(error).split(" ").length - 1] == "401"
        ) {
          history.push({ pathname: "/login" });
        }
      });
  };

  const handlepreview = (event) => {
    event.preventDefault();
    history.push({ pathname: "/preview", state: { vidsrc: video.video_file } });
  };

  // useEffect(() => {
  //   axios.get(`http://127.0.0.1:8000/api/video/${video.id}/${video.eps_num == null ? 'movie':'episode'}/addtomylist`).then((result) => {
  //     console.log(result.data);
  //   });
  // }, [vids]);

  return (
    <>
      <div id="CardPhoto" className="card">
        <video
          src={video.video_file}
          className="card-img-top"
          muted
          alt=""
          poster={video.image}
        />

        <div className="card-body">
          <div className="row">
            <div className="col1 col-6">
              <FaPlayCircle
                onClick={handlepreview}
                size="35px"
                style={{ color: icoColor }}
              />
              {addToList ? (
                <></>
              ) : (
                <a onClick={handleAddMyList}>
                  <AiOutlinePlusCircle
                    size="40px"
                    style={{ color: icoColor }}
                  />
                </a>
              )}
            </div>

            <div className="col2 col-6">
              <a onClick={handleClick} href="####">
                <IoIosArrowDropdown size="40px" style={{ color: icoColor }} />
              </a>
            </div>
          </div>
          <div className="line1">
            <p className="match">
              Rate {video.rates.map((r, index) => (index < 1 ? r.rate : <></>))}
              /10
            </p>
            <p className="age">16+</p>
            {video.eps_num != null && (
              <p className="season_num_p">
                Season:{video.series.season_num}
                {/* Episode:{video.eps_num} */}
              </p>
            )}
            {video.eps_num == null && <p className="season_num_p">Movie</p>}
            <p className="quality">HD</p>
          </div>

          <div className="line2">
            {video.categories.map((cat, index) => (
              <>
                {index < 3 ? (
                  <>
                    <p>{cat.title}</p>
                    <BsDot />
                  </>
                ) : (
                  <p></p>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
