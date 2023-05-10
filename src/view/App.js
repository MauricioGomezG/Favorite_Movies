import "../styles/styles.css";

import NavBar from "../model/components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import Home from "../model/components/Home";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div>
        <header>
          <NavBar />
        </header>
      </div>
      <div>
        <main>
          <Home />
        </main>
      </div>
    </div>
  );
}



export default App;
