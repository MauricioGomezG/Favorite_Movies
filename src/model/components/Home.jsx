import React, { Fragment, useState } from "react";
import { Container } from "react-bootstrap";
import MovieList from "./MovieList";
import Search from "./Search";
import movieData from "../../controller/movieData";

function Home() {
  const [movies, setMovies] = useState(movieData);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([movies, setMovies]);

  React.useEffect(() => {
    const results = movies.filter((movie) => movie.Title.includes(searchValue));
    setSearchResults(results);
  }, [searchValue]);

  return (
    <Fragment>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Container>
        <div className="container-fluid movie-app d-flex justify-content-center">
          <div className="row">
            <MovieList movies={searchResults} />
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default Home;
