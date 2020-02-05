import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ProjectItem extends React.Component {
  render() {
    return (
      <Link to={"/project/" + this.props.name} className="project-item">
        <img src={this.props.img} alt="" />
        <div className="project-text">
          <div className="project-type">
            <FontAwesomeIcon icon="external-link-square-alt" />
            {this.props.type}
          </div>
          <div className="project-name">{this.props.name}</div>
          <div className="project-details">{this.props.details}</div>
        </div>
      </Link>
    );
  }
}
