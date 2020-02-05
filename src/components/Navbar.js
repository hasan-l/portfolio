import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className={this.props.isNavbarToggleOn ? "navbar-expanded" : ""}>
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
            <button
              className="navbar-toggle"
              aria-expanded={this.props.isNavbarToggleOn ? "true" : "false"}
              onClick={this.props.navbarToggleClick}
            >
              <span className="navbar-toggle-icon"></span>
            </button>
            <div className="navbar-logo">
              <FontAwesomeIcon icon="chess-queen" />
            </div>
            <div className="navbar-social">
              <a
                href="https://github.com/hasan-l"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
