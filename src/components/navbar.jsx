import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <header>
      <div className="container">
        <h1>Movies</h1>
        <div className="icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/trend">Trend</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default navbar;
