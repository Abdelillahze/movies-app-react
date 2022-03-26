import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import useFetch from "../hooks/useFetch";
import Movie from "../components/movie";

const Home = () => {
  const [value, setValue] = useState("");
  const [movies, isPanding, error] = useFetch(
    value && `search/movie?query=${value}&`
  );

  return (
    <>
      <section className="home">
        <div className="container">
          <h1>Welcome To the Website</h1>
          <div className="search">
            <input
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              placeholder="Search For Movie"
            />
            <BiSearch />
          </div>
        </div>
      </section>
      <section className="movies">
        <div className="container">
          {console.log(error)}
          {error && <div className="error">Not Found</div>}
          {isPanding && <div className="panding"></div>}
          {movies &&
            movies.map((e) => <Movie movie={e} key={e.title || e.name} />)}
        </div>
      </section>
    </>
  );
};

export default Home;
