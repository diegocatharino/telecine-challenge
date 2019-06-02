import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const conteudo = `content/conteudo.json`;

class Details extends Component {
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
      <div className="Details">
        {this.state.data.map(item => (
        <div className="content" key="details">
          <span className="categoryDetails"><span>Dispositivos</span></span>
          <h5 className="titleDetails">{item.details_main_title}</h5>
          <ul className="listagemDetails">
            <li>
              <img alt="Assista na TV" src={item.details_img1} />
              <span className="titleListagem">{item.details_sub_title1}</span>
              <ul className="topics">
                <li><FontAwesomeIcon icon="check" />{item.details_sub_title1_li1}</li>
                <li><FontAwesomeIcon icon="check" />{item.details_sub_title1_li2}</li>
                <li><FontAwesomeIcon icon="check" />{item.details_sub_title1_li3}</li>
              </ul>
            </li>
            <li>
              <img alt="Ou onde quiser" src={item.details_img2} />
              <span className="titleListagem">{item.details_sub_title2}</span>
              <ul className="topics">
                <li><FontAwesomeIcon icon="check" />{item.details_sub_title2_li1}</li>
                <li><FontAwesomeIcon icon="check" />{item.details_sub_title2_li2}</li>
                <li><FontAwesomeIcon icon="check" />{item.details_sub_title2_li3}</li>
              </ul>
            </li>          
          </ul>
        </div>
        ))}
      </div>
    );
  }
}

export default Details;
