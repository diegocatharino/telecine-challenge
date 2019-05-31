import React, { Component } from "react";
import logo from '../../img/tcplay.png'; 

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="content">
          <img alt="Telecine" src={logo} />
          <a href="https://ajuda.telecineplay.com.br/" target="_blank" rel="noopener noreferrer" className="footerTexts">
            <strong>Ficou com alguma dúvida?</strong>
            Acesse nossa ajuda
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
