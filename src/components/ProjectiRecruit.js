import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ProjectiRecruit extends React.Component {
  render() {
    return (
      <div className="project-item-expanded">
        <Link
          to="/"
          className="back-btn"
          onAnimationEnd={console.log("animation")}
        >
          <FontAwesomeIcon icon="long-arrow-alt-left" />
        </Link>
        <div className="container project-block">
          <h1 className="">iRecruit - Branding of recruitment websites</h1>
          <p>
            I was tasked with creating branded versions of the baseline iRecruit
            site typically mimicking the clients main external website. I took
            the below bareboned template and using mainly HTML, CSS, Bootstrap,
            Razor and to a lesser degree fontawesome, JavaScript...
          </p>
        </div>
        <div className="full-width-container">
          <div className="img-container">
            <img
              className="criss-cross"
              src="../images/iRecruit/irecruit-home-default.png"
              alt="project image"
            />
            <img
              className="criss-cross"
              src="../images/iRecruit/irecruit-home-vacancy.png"
              alt="project image"
            />
          </div>
        </div>
        <div className="container project-block container-center">
          <h1 className="">...I transformed it into the below</h1>
        </div>
        <div className="full-width-container">
          <div className="video-container">
            <video
              preload="preload"
              id="video"
              autoPlay=""
              loop="loop"
              muted=""
              poster="../images/iRecruit/Millenium Point/home-snip.png"
              className=""
            >
              <source
                src="../images/iRecruit/Millenium Point/home.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="full-width-container">
          <div className="img-container">
            <img
              className="criss-cross"
              src="../images/iRecruit/P3/home-snip.png"
              alt="project image"
            />
            <img
              className="criss-cross"
              src="../images/iRecruit/P3/vacancy-snip.png"
              alt="project image"
            />
          </div>
        </div>
        <div className="full-width-container">
          <div className="video-container">
            <video
              preload="preload"
              id="video"
              autoPlay=""
              loop="loop"
              muted=""
              poster="../images/iRecruit/Navigator Gas/home-snip.png"
              className=""
            >
              <source
                src="../images/iRecruit/Navigator Gas/home.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="full-width-container">
          <div className="img-container">
            <img
              className="criss-cross"
              src="../images/iRecruit/Battersea/home-snip.png"
              alt="project image"
            />
            <img
              className="criss-cross"
              src="../images/iRecruit/Battersea/vacancy-snip.png"
              alt="project image"
            />
          </div>
        </div>
        <div className="container project-block">
          <h1 className="">CIPHR product branding</h1>

          <p>
            I was tasked with carrying out the branding of the CIPHR version
            which would be used as the baseline version going forward and
            showcasing the software's capabilities to prospective clients
          </p>
        </div>
        <div className="full-width-container">
          <div className="img-container">
            <img
              className="criss-cross"
              src="../images/iRecruit/CIPHR/home-snip.png"
              alt="project image"
            />
            <img
              className="criss-cross"
              src="../images/iRecruit/CIPHR/vacancy-snip.png"
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
