import React, { Fragment } from "react";
import { Row, Col, InputGroup, Form, Button } from "react-bootstrap";

const Search = (props) => {
  return (
    <Fragment>
      <Row className="px-4 my-5">
        <Col>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Filtrar por nombre de pelicula..."
              aria-label="movie_name"
              aria-describedby="basic-addon2"
              value={props.value}
              onChange={(event)=> props.setSearchValue(event.target.value)}
              className="border border-success"
            />
          </InputGroup>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Search;