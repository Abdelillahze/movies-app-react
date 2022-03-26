import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import MovieEl from "../components/movie";

const Movie = () => {
  const name = useParams().name;

  const strConvert = (str, spc) => {
    return str.replaceAll("-", spc);
  };

  const [movie, isPanding, error] = useFetch(
    `search/movie?query=${strConvert(name, " ")}&`
  );

  const [smMovies, smIsPanding, smError] = useFetch(
    movie && `movie/${movie[0].id}/similar?`
  );

  return (
    <>
      <section className="movie">
        <div className="container">
          {isPanding && (
            <div className="panding">
              <div className="img"></div>
            </div>
          )}
          {movie && (
            <div className="img">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie[0].poster_path}`}
                alt=""
              />
            </div>
          )}
          {movie && (
            <div className="content">
              <h1>{movie[0].title || movie[0].name}</h1>
              <p>{movie[0].overview}</p>
              <div className="details">
                <div className="col">
                  <span>Rate</span>
                  <span>
                    <span className="rate">{movie[0].vote_average}</span>/10
                  </span>
                </div>
                <div className="col">
                  <span>Release Date</span>

                  <span>{strConvert(movie[0].release_date, "/")}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="sm-movies movies">
        <div className="container">
          <h1>Similar Movies: </h1>
          <div className="grid">
            {isPanding && (
              <div className="panding">
                <div className="img"></div>
              </div>
            )}
            {smMovies &&
              smMovies.map((e) => (
                <MovieEl movie={e} key={e.title || e.name} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
