import React from "react";

export const Loginstate = () => {
    let userData = JSON.parse(localStorage.getItem('user'));
    if (localStorage.getItem('user')) {
        return true;
    } else {
        return false;
    }
}