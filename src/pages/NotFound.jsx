import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container">
        <h1>404</h1>
        <p>
          We can't find the page you're looking for.{" "}
          <Link to="/">Back To Homepage</Link>
        </p>
      </div>
    </section>
  );
};

export default NotFound;
