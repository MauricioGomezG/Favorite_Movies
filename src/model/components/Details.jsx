import React from "react";
import { Modal, Button } from "react-bootstrap";

function Details(props) {
  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.movieDetails.Title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Sinopsis</h4>
          <p>
          {props.movieDetails.Synopsis}
          </p>
          <br/>
          <h4>Actores</h4>
          <p>
          {props.movieDetails.Actors}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
  );
}

export default Details;
