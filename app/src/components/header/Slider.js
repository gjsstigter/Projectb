import React, { Component } from "react";
import { Slide } from "react-slideshow-image";

const imgbase = "../../assets/images/slideshow/";

// Het importeren van alle fotos in de assets/iamges/slideshow
function importAll(r) {
  return r.keys().map(r);
}

const slideImages = importAll(
  require.context("../../assets/images/slideshow/", false, /\.(png|jpe?g|svg)$/)
);

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
};

const Slider = () => {
  let images = slideImages.map((imgName, index) => {
    return (
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${imgName})`, height: `500px` }}>
          <span className="slide-text">this is de slider test</span>
        </div>
      </div>
    );
  });

  return (
    <div className="slide-container">
      <Slide {...properties}>{images}</Slide>
    </div>
  );
};

export default Slider;
