import React, { Component } from "react";
import "./App.scss";
import Hero from "./view/Hero";
import Slider from "./view/Slider";
import Details from "./view/Details";
import Footer from "./view/Footer";

class App extends Component {
  render() {
    return (
		<div className="App">
			<Hero />
			<Slider />
		</div>
    );
  }
}

export default(App);
