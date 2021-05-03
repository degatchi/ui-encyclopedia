import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
          console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--large"
      >
        Buy Now
      </Button>
      <Button
        onClick={() => {
          console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--primary--solid"
        buttonSize="btn--medium"
      >
        Buy Now
      </Button>
      <Button
        onClick={() => {
          console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--success--solid"
        buttonSize="btn--large"
      >
        Buy Now
      </Button>
      <Button
        onClick={() => {
          console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--danger--outline"
        buttonSize="btn--medium"
      >
        Buy Now
      </Button>
      <Button
        onClick={() => {
          console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--warning--solid"
        buttonSize="btn--large"
      >
        Buy Now
      </Button>
      <Button
        onClick={() => {
          console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--danger--solid"
        buttonSize="btn--large"
      >
        Buy Now
      </Button>
      <Button
        onClick={() => {
          console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--success--outline"
        buttonSize="btn--medium"
      >
        Buy Now
      </Button>
      <Button
        onClick={() => {
          console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--warning--outline"
        buttonSize="btn--large"
      >
        Buy Now
      </Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
