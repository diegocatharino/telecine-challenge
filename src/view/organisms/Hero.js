import React, { Component } from "react";
import logo from '../../img/tcplay.png'; 
import FormButton from "../atoms/FormButton";

class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <div className="containerBG"></div>      
        <header className="logo">
          <h1 className="appTitle"><img src={logo} alt="Telecine" /></h1>
        </header>      
        <div className="content">
          <h2 className="mainTitle">
            Filmes exclusivos dos maiores estúdios, é <strong>só dar um play</strong>
          </h2>
          <h5 className="subTitle">
            Curta 7 dias grátis, assine por R$37,90/mês e cancele quando quiser.
          </h5>  
          <FormButton />
        </div>     
      </div>
    );
  }
}

export default Hero;