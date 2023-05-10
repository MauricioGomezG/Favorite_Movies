import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import ReviewCard from "./ReviewCard";
import NewReviewCard from "./NewReviewCard";

function Reviews(props) {
  return (
    <Fragment>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Reseñas: {props.movieDetails.Title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.movieDetails.Reviews?.map((reviewData, idx) => (
            <div key={idx} className="m-3">
              <ReviewCard review={reviewData}></ReviewCard>
            </div>
          ))}
          <div className="m-3">
            <NewReviewCard
              reviewsList={props.movieDetails.Reviews}
            ></NewReviewCard>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default Reviews;
