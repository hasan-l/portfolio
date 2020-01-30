import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ProjectPortfolio extends React.Component {
  render() {
    return (
      <div className="project-item-expanded">
        <Link to="/" className="back-btn">
          <FontAwesomeIcon icon="long-arrow-alt-left" />
        </Link>
        <div className="container project-block">
          <h1 className="">Portfolio</h1>

          <p>
            I created this portfolio single page application using React and
            Sass in the Create React App environment
          </p>
        </div>
        <div className="full-width-container">
          <div className="img-container img-container-single">
            <img
              className="criss-cross"
              src="../images/portfolio.png"
              alt="project image"
            />
          </div>
        </div>

        <div className="full-width-container">
          <div className="link-container">
            <a href="#">Back to Top</a>
          </div>
        </div>
      </div>
    );
  }
}
