import React, { Fragment } from "react";
import logo from "../../images/movie-projector.png";
import { Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Mis Peliculas Favoritas
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default NavBar;
