import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEye, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight, faEye, faCheck)

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
