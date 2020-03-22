import React from "react";
import {Link} from "react-router-dom";

export default function P404() {
    return (
      <main>
          <h2>404 page not found</h2>
          <Link to={`/`}>Return to home</Link>
      </main>
    );
}