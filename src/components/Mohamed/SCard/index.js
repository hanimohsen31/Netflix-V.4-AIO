import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { ApiContext } from "../../../Context/ApiContext";
import { AuthContext } from "../../../Context/authcontext";

import "./SCard.css";
function SCard({ video, search }) {
  const history = useHistory();
  const apicontext = useContext(ApiContext);
  const authcontext = useContext(AuthContext);
  const [DeleteFromeMyList, setDeleteFromeMyList] = useState(false);


  const handleClick = (event) => {
    event.preventDefault();
    history.push({ pathname: "/details", state: {vid_id: video.id ,series:video.series} });
  };

  const handleDeleteFromeMyList = async (event) => {
    event.preventDefault();
    console.log(authcontext.user);
    await apicontext
      .post(
        `http://127.0.0.1:8000/api/video/${video.id}/${
          video.eps_num == null ? "movie" : "episode"
        }/deletefrommylist`,
        {
          token: localStorage.getItem("token"),
        }
      )
      .then((response) => setDeleteFromeMyList(response.data.deleted))
      .catch((error) => {
        if (
          String(error).split(" ")[String(error).split(" ").length - 1] == "401"
        ) {
          history.push({ pathname: "/login" });
        }
      });
  };
  return DeleteFromeMyList ? (
    <></>
  ) : (
    <div class="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div class="scard border-0 ">
        <img src={video.image} class="card-img-top" alt="..." />
        <div class="card-body scard-hover text-light position-relative ">
          <div class="card-title ">
            <a class="text-white" href="#" onClick={handleClick}>
              <h4>{video.title}</h4>
            </a>
          </div>
          <br />
          {search ? (
            <></>
          ) : (
            <FaTrashAlt
              onClick={handleDeleteFromeMyList}
              className="fixed-bottom top-3 scard-icons"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SCard;
