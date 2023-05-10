import React, { Fragment, useState } from "react";
import {
  Form,
  Button,
  Card,
  InputGroup,
  FormGroup,
  DropdownButton,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { getCurrentDate } from "../../controller/date";

function NewReviewCard(props) {
  const items = ["1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"];
  const [selectedRating, setSelectedRating] = useState("");
  const [reviewer, setReviewer] = useState(props?.value ?? "");
  const [reviewBody, setReviewBody] = useState("");
  const [fullReview, setFullReview] = useState([]);

  const handleClick = () => {
    setFullReview((fullReview) => [
      ...fullReview,
      {
        Reviewer: { reviewer },
        Rating: { selectedRating },
        Date: { getCurrentDate },
        ReviewBody: { reviewBody },
      },
    ]);
  };

  return (
    <Fragment>
      <Card className="d-flex">
        <Card.Body>
          <Card.Title>
            Agregar Nueva Reseña
            <Badge className="float-end" bg="danger">
              {selectedRating}
            </Badge>
          </Card.Title>
          <Form>
            <Form.Group className="mb-3 mt-3">
              <Form.Control
                type="text"
                placeholder="Escribe tu nombre aqui..."
                value={reviewer}
                onInput={(e) => setReviewer(e.target.value)}
              />
            </Form.Group>
            <FormGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Text input with dropdown button"
                  placeholder="Escribe tu reseña aqui... no hay limite de caracteres!"
                  as="textarea"
                  value={reviewBody}
                  onInput={(e) => setReviewBody(e.target.value)}
                />

                <DropdownButton
                  variant="outline-danger"
                  title="Puntuar"
                  id="input-group-dropdown-2"
                  align="end"
                >
                  {items.map((item, i) => (
                    <Dropdown.Item
                      key={i}
                      onClick={() => setSelectedRating(item)}
                    >
                      {item}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </InputGroup>
            </FormGroup>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
            ></Form.Group>
            <Button variant="success" type="submit" onClick={handleClick}>
              Enviar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default NewReviewCard;
