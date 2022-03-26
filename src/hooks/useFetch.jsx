import React, { useEffect, useState } from "react";

const useFetch = (type) => {
  const [data, setData] = useState(null);
  const [isPanding, setIsPanding] = useState(true);
  const [error, setError] = useState(false);
  const API_KEY = "api_key=fabda4527fbb9c3e96b8e86c115a16a6";
  const API = `https://api.themoviedb.org/3/${type}${API_KEY}`;
  const abortCont = new AbortController();

  useEffect(() => {
    fetch(API, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          setIsPanding(false);
          throw new Error("Not Found");
        }
        return res.json();
      })
      .then((data) => {
        setIsPanding(false);
        setData(data.results);
        setError(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError(true);
      });

    return () => {
      abortCont.abort();
    };
  }, [API]);

  return [data, isPanding, error];
};

export default useFetch;
