import React, { Component } from "react";
import popcorn from "../../../assets/images/slider/popcorn.jpg";
import movieTickets from "../../../assets/images/slider/movie-tickets.jpg";
import movieTape from "../../../assets/images/slider/movie-tape.jpg";

class Slider extends Component {
  render() {
    return (
      <div className='wrapper-slider'>
        <ul>
          <li>
            <img
              src={popcorn}
              alt='slider-img-1'
              className='slider-img active'
            />
          </li>
          <li>
            <img src={movieTickets} alt='slider-img-1' className='slider-img' />
          </li>
          <li>
            <img src={movieTape} alt='slider-img-1' className='slider-img' />
          </li>
        </ul>
      </div>
    );
  }
}

export default Slider;
