import React from "react";
import "./style.scss";

const CardSlide = ({ image }) => {
  console.log(image);
  return (
    <div className="content-slide">
      <figure>
        <img src={image} alt="car slide..." />
      </figure>
    </div>
  );
};

export default CardSlide;
