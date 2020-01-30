import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Overlay from "./components/Overlay";
import Cover from "./components/Cover";
import ProjectiRecruit from "./components/ProjectiRecruit";
import ProjectMarkdown from "./components/ProjectMarkdown";
import ProjectPortfolio from "./components/ProjectPortfolio";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavbarToggleOn: false
    };
    this.navbarToggleClick = this.navbarToggleClick.bind(this); //purpose is to improve performance
    this.handleLoad = this.handleLoad.bind(this);
    this.projectToggleClick = this.projectToggleClick.bind(this);
  }

  componentDidMount() {
    console.log("mounted");
    window.addEventListener("load", this.handleLoad);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad);
  }

  handleLoad() {
    if (!this.isLoaded) {
      document.querySelector("body").classList.add("loaded");
    }
  }

  navbarToggleClick(e) {
    e.preventDefault();
    console.log("Navbar toggle Clicked!");
    this.setState({
      isNavbarToggleOn: !this.state.isNavbarToggleOn
    });
  }

  projectToggleClick(e) {
    //no prevent default to allow page to go to href="#project"
    this.setState({
      isNavbarToggleOn: !this.state.isNavbarToggleOn
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="page-wrapper">
          <Navbar
            isNavbarToggleOn={this.state.isNavbarToggleOn}
            navbarToggleClick={this.navbarToggleClick}
            projectToggleClick={this.projectToggleClick}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <div>
                  <Overlay />
                  <Cover />
                  <Content />
                  <Footer />
                </div>
              )}
            />
            <Route path="/project/iRecruit" component={ProjectiRecruit} />
            <Route path="/project/Markdown" component={ProjectMarkdown} />
            <Route path="/project/Portfolio" component={ProjectPortfolio} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
