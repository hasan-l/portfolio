import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

export default class Content extends Component {
  render() {
    return (
      <div className="content" id="projects">
        <div className="content-inner">
          <div className="projects-list">
            <div href="#" className="project-intro">
              <div className="project-intro-text">
                <h1>Projects</h1>
              </div>
            </div>
            <ProjectItem
              id={1}
              img={"./images/combined.jpg"}
              type={"Web Design/Dev"}
              name={"iRecruit"}
              details={"Branding for multiple client's"}
            />
            <ProjectItem
              id={2}
              img={"./images/markdown.png"}
              type={"React"}
              name={"Markdown"}
              details={"CodePen Markdown Previewer"}
            />
            <ProjectItem
              id={3}
              img={"./images/portfolio.png"}
              type={"React"}
              name={"Portfolio"}
              details={"Built using create-react-app"}
            />
          </div>
        </div>
      </div>
    );
  }
}
