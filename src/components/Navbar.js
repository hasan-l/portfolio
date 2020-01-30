import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className={this.props.isNavbarToggleOn ? "navbar-expanded" : ""}>
        <div className="sidebar">
          <div className="sidebar-outer">
            <div className="sidebar-outer-content">
              <div className="links-container">
                <a href="#projects" onClick={this.props.projectToggleClick}>
                  Projects
                </a>
                <a href="mailto:hasan.liaquat@hotmail.com">Contact</a>
              </div>
            </div>
          </div>
          <div className="sidebar-inner">
            <a
              href="#"
              className="navbar-toggle"
              aria-expanded={this.props.isNavbarToggleOn ? "true" : "false"}
              onClick={this.props.navbarToggleClick}
            >
              <span className="navbar-toggle-icon"></span>
            </a>
            <div className="navbar-logo">
              <FontAwesomeIcon icon="chess-queen" />
            </div>
            <div className="navbar-scroll">
              {/* <div className="scroll-text">scroll</div>
              <div className="scroll-icon">
                <FontAwesomeIcon icon="long-arrow-alt-down" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
