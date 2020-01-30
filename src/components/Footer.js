import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-left"></div>
        <div className="footer-right">
          <a href="https://github.com/hasan-l" target="_blank">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          Site by Hasan Liaquat
        </div>
      </div>
    );
  }
}
