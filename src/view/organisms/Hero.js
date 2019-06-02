import React, { Component } from "react";
import logo from '../../img/tcplay.png'; 
import FormButton from "../atoms/FormButton";

const conteudo = `content/conteudo.json`;

class Hero extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(conteudo);
    const result = await response.json();
    this.setState({ data: result.data });
  }

  render() {
    return (
      <div className="Hero">
        {this.state.data.map(item => (
          <div key="hero">         
            <div style={{backgroundImage: `url(${item.hero_background_image})`}}  className="containerBG"></div>      
            <header className="logo">
              <h1 className="appTitle"><img src={logo} alt="Telecine" /></h1>
            </header>      
            <div className="content">
              <h2 className="mainTitle">{this.data}
                {item.hero_main_title} <strong>{item.hero_main_title_strong}</strong>
              </h2>
              <h5 className="subTitle">
                {item.hero_sub_title}
              </h5>  
              <FormButton />
            </div> 
          </div>
        ))}
      </div>
    );
  }
}

export default Hero;
