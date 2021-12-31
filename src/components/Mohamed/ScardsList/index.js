import React from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import SCard from "../SCard/index";

function ScardsList({ video, search }) {
  return (
    <>
      <div class="position-relative row   p-3">
        {video.map((p) => (
          <SCard video={p} search={search} />
        ))}
        <div className="banner-fadebottom ">
          <FaChevronCircleDown className="position-absolute m-auto icons fixed-bottom" />
        </div>
      </div>
    </>
  );
}

export default ScardsList;
