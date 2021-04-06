import React from "react";
import CardSlide from "../CardSlide";
import settings from "../../helpers/SettingsSlide/settings.js";
import Slider from "react-slick";
import cars from "../../helpers/CarsSlide/cars.js";

const Slide = () => {
  return (
    <div>
      <Slider {...settings}>
        {cars.map((car, index) => (
          <div>
            <CardSlide image={car.image} key={index} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
