import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import "./SCard.css";
function SCard() {
  return (
    <div class="col col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div class="scard border-0 ">
        <img src="/images/4.jpeg" class="card-img-top" alt="..." />
        <div class="card-body scard-hover text-light position-relative ">
          <div class="card-title ">
          <span className="age m">16+</span>
          <span className="p-year m">2021</span>
          </div>
          <FaPlusCircle className="   scard-icons" />

          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SCard;
