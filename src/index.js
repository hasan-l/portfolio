import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import * as serviceWorker from "./serviceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faChessQueen,
  faLongArrowAltLeft
} from "@fortawesome/free-solid-svg-icons";

localStorage.setItem("project_name", "Site");

//scroll to top on page refresh
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

library.add(fab, faChessQueen, faLongArrowAltLeft); //fab represents all brand icons

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
