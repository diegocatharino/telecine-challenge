import React from "react";
import ReactDOM from "react-dom";
import App from "./view/pages/App";
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faEye, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight, faEye, faCheck)

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
