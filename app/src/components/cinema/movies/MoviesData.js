import React from "react";
import Api from "../api/Api";

export const MovieData = (id) => {

    return Api(`/movie/${id}`, `GET`);
};

export const MoviesData = () => {

    return Api(`/movie/`,`GET`);
};
