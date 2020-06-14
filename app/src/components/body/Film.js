import React, { Component } from "react";
import { MoviesData } from "../cinema/movies/MoviesData";
import videobanner5 from "../../assets/images/home/filmbanner4.jpg";
import { Link } from "react-router-dom";

let Film = (props) => {
  // check if filmitem has an img
  let imgSrc;
  if (props.photo) {
    imgSrc = props.photo;
  } else {
    imgSrc = videobanner5;
  }

  let body = (
    <div className="film-card-wrapper">
      <img src={imgSrc} className="film-img" />
      <h1 className="film-title">{props.title}</h1>
      <p className="release-date">Release: {props.releaseDate}</p>

      <div className="hover-info">
        <Link to={`/films/${props.id}`}>
          <h1 className="film-title-hover">{props.title}</h1>
        </Link>
        <div className="info-wrapper">
          <p className="release-date">Uitgebracht: {props.releaseDate}</p>
          <p className="release-date">Genres: {props.genre}</p>
        </div>
        <div className="rating">
          <h1>{props.stars}</h1>
        </div>
      </div>
    </div>
  );

  return body;
};

export default Film;
