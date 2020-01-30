import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Overlay extends Component {
  render() {
    return (
      <div className="overlay" id="overlay">
        <div className="overlay-inner">
          <FontAwesomeIcon icon="chess-queen" />
        </div>
      </div>
    );
  }
}
