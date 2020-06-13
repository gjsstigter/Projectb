import React from "react";
import { Slide } from "react-slideshow-image";

// Het importeren van alle fotos in de assets/iamges/slideshow
function importAll(r) {
  return r.keys().map(r);
}

const slideImages = importAll(
  require.context("../../assets/images/slideshow/", false, /\.(png|jpe?g|svg)$/)
);

const properties = {
  duration: 10000,
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
        <div style={{ backgroundImage: `url(${imgName})`}} className="slide-image"  >
          <div className="slide-text">
            <p>Deze film is gaaf en moet je zien!!</p>
          </div>
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
