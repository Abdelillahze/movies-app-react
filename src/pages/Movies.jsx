import React from "react";
import useFetch from "../hooks/useFetch";
import Movie from "../components/movie";

const Movies = () => {
  const [movies, isPanding, error] = useFetch(
    "discover/movie?sort_by=popularity.desc&"
  );
  return (
    <>
      <section className="movies">
        <div className="container">
          {isPanding && <div className="panding"></div>}
          {movies &&
            movies.map((e) => <Movie movie={e} key={e.title || e.name} />)}
        </div>
      </section>
    </>
  );
};

export default Movies;
