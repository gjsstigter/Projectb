import React from "react";
import Api from "../api/Api";

export const MovieData = (id) => {

    return Api(`/movie/${id}`);
};

export const MoviesData = (id) => {

    return Api(`/movie/`);
};
