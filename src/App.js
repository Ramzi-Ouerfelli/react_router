import React, { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Movies from "./Movies";
import MovieList from "./MovieList";
import BasicModal from "./Add";
import MovieDetail from "./Navigate";
import {Route, Routes} from "react-router-dom";

function App() {
  // state data
  const [movies, setMovies] = useState(Movies);
  const [searchTitel, setSearchTitel] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  // parse movie getter to newMovie
  const add = (newMovie) => {
    setMovies([...movies, newMovie]);

    //
  };

  return (
      <div className="App">
        <NavBar
          setSearchTitel={setSearchTitel}
          setSearchRating={setSearchRating}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MovieList
                  Movies={movies}
                  searchTitel={searchTitel}
                  searchRating={searchRating}
                />
                <BasicModal ob={add} />
              </>
            }
          />
          <Route path="/Navigate/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
  );
}

export default App;
