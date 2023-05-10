import React, { Fragment, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Details from "./Details";
import Reviews from "./Reviews";

const MovieList = (props) => {
  const [detailsShow, setDetailslShow] = React.useState(false);
  const [reviewsShow, setReviewsShow] = React.useState(false);
  const [currentMovieData, setCurrentMovieData] = useState([]);
  const getData = (movie) => {
    setCurrentMovieData(movie);
  };

  return (
    <Fragment>
      {props.movies.map((movie, index) => (
        <div className="align-items-center d-flex justify-content-center col m-1 p-1">
          <Card className="border border-secondary" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Year}</Card.Text>
              <Button
                variant="primary float-end d-flex m-1"
                type="button"
                onClick={() => {
                  getData(movie);
                  setDetailslShow(true);
                }}
              >
                Detalles
              </Button>
              <Details
                show={detailsShow}
                movieDetails={currentMovieData}
                onHide={() => setDetailslShow(false)}
              />
                <Button
                  variant="secondary float-end d-flex m-1"
                  type="button"
                  onClick={() => {
                    getData(movie);
                    setReviewsShow(true);
                  }}
                >
                  Reseñas
                </Button>
                <Reviews
                  show={reviewsShow}
                  movieDetails={currentMovieData}
                  onHide={() => setReviewsShow(false)}
                />
            </Card.Body>
          </Card>
        </div>
      ))}
    </Fragment>
  );
};

export default MovieList;
