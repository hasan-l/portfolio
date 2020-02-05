import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ProjectMarkdown extends React.Component {
  render() {
    return (
      <div className="project-item-expanded">
        <Link to="/" className="back-btn">
          <FontAwesomeIcon icon="long-arrow-alt-left" />
        </Link>
        <div className="container project-block">
          <h1 className="">Markdown</h1>

          <p>
            I created this Markdown Previewer using React in a CodePen
            environment. Markdown is often used to format readme files, for
            writing messages in online discussion forums, and to create rich
            text using a plain text editor.
          </p>
        </div>
        <div className="full-width-container">
          <div className="img-container img-container-single">
            <img
              className="criss-cross"
              src="../images/markdown.png"
              alt="markdown project"
            />
          </div>
        </div>

        <div className="full-width-container">
          <div className="link-container">
            <a
              href="https://codepen.io/hasan-l/pen/mdyXdmN"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
      </div>
    );
  }
}
