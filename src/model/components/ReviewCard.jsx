import React, { Fragment } from "react";
import { Card, Form, Badge } from "react-bootstrap";

function ReviewCard(props) {
  return (
      <Card className="d-flex">
        <Card.Body>
          <Card.Title>
            Reseña escrita por {props.review.Reviewer}{" "}
            <Badge pill bg="dark">
              {props.review.Rating}
            </Badge>
          </Card.Title>
          <Form.Text id="date" muted>
            {props.review.Date}
            <br /><br />
          </Form.Text>
          <Card.Text>{props.review.ReviewBody}</Card.Text>
        </Card.Body>
      </Card>
  );
}

export default ReviewCard;
