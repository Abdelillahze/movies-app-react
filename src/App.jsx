import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Trend from "./pages/Trend";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trend" element={<Trend />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie/:name" element={<Movie />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
