import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import details1 from '../img/details-1.jpg'; 
import details2 from '../img/details-2.jpg'; 

class Details extends Component {
  render() {
    return (
      <div className="Details">
        <div className="content">
          <span className="categoryDetails"><span>Dispositivos</span></span>
          <h5 className="titleDetails">O melhor catálogo. Em todas as telas.</h5>
          <ul className="listagemDetails">
            <li>
              <img src={details1} />
              <span className="titleListagem">Assista na TV</span>
              <ul className="topics">
                <li><FontAwesomeIcon icon="check" />Smart TVs</li>
                <li><FontAwesomeIcon icon="check" />Chromecast</li>
                <li><FontAwesomeIcon icon="check" />Xbox One</li>
              </ul>
            </li>
            <li>
              <img src={details2} />
              <span className="titleListagem">Ou onde quiser</span>
              <ul className="topics">
                <li><FontAwesomeIcon icon="check" />Android</li>
                <li><FontAwesomeIcon icon="check" />IOS</li>
                <li><FontAwesomeIcon icon="check" />PC</li>
              </ul>
            </li>          
          </ul>
        </div>
      </div>
    );
  }
}

export default Details;
