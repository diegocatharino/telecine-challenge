import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import BootstrapForm from "./Form";

class FormButton extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <ButtonToolbar>
        <Button
          variant="primary"
          className="btnCta btnPrimario" title="Experimente grátis"
          onClick={() => this.setState({ modalShow: true })}
        >
          
          Experimente grátis 
          <FontAwesomeIcon icon="arrow-right" />
        </Button>

        <BootstrapForm show={this.state.modalShow} onHide={modalClose} /> 
        <BootstrapForm />
      </ButtonToolbar>
    );
  }
}


export default(FormButton);
