import React, { Fragment } from "react";
import logo from "../../images/movie-projector.png";
import { Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Fragment>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              // className="d-inline-block align-left"
            />{" "}
            <h1>Mis Peliculas Favoritas</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default NavBar;
