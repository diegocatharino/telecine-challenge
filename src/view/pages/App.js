import React, { Component } from "react";
import "../../App.scss";
import Hero from "../organisms/Hero";
import Slider from "../organisms/Slider";
import Details from "../organisms/Details";
import Footer from "../organisms/Footer";

class App extends Component {
  render() {
    return (
		<div className="App">
			<Hero />
			<Slider />
			<Details />
			<Footer />
		</div>
    );
  }
}

export default(App);
