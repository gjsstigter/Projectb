import React from "react";
import Api from "../api/Api";
export const ShowsData = () => {

    return Api(`/shows/`,`GET`);
};