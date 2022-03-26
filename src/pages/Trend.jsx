import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Movie from "../components/movie";

const Trend = () => {
  const [movies, isPanding, error] = useFetch("trending/all/week?");
  return (
    <section className="trend movies">
      <div className="container">
        {isPanding && <div className="panding"></div>}
        {movies &&
          movies.map((e) => <Movie movie={e} key={e.title || e.name} />)}
      </div>
    </section>
  );
};

export default Trend;
