import React, { Component } from "react";

export default class Cover extends Component {
  render() {
    return (
      <div className="cover">
        <div className="cover-header">
          <div className="cover-title">
            <h2>Portfolio</h2>
          </div>
          <div className="cover-tagline">
            <h2>Hasan Liaquat</h2>
          </div>
        </div>
        <img
          className="cover-image"
          src="../images/cover-img.jpg"
          alt="cover"
        />
        <div className="cover-captions">
          <h3>Hi, I'm a web developer</h3>
        </div>
      </div>
    );
  }
}
