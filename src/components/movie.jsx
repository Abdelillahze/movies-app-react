import React from "react";
import { Link } from "react-router-dom";

const movie = ({ movie }) => {
  const imgSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const convertToUrl = (str) => {
    return str && str.replaceAll(" ", "-").toLowerCase();
  };

  return (
    <Link
      to={`/movie/${convertToUrl(movie.title) || convertToUrl(movie.name)}`}
    >
      <div className="movie">
        <div className="img">
          <img src={imgSrc} alt="" />
        </div>
        <div className="text">
          <h4>{movie.title || movie.name}</h4>
          {movie.vote_average >= 6 ? (
            <span className="above">{movie.vote_average}</span>
          ) : (
            <span>{movie.vote_average.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default movie;
