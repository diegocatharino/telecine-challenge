import React from "react";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import logo from '../img/tcplay.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormSent from "./FormSent";
import FormInput from "./FormInput";

class BootstrapForm extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
    this.state = { showSuccess: false };
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("INVALID FORM - not submitted");
      event.preventDefault();
      event.stopPropagation();    
    } else{
      console.log("VALID FORM - submitted");
      event.preventDefault();
      event.stopPropagation();    
      this.setState({ showSuccess: true });
    } 

    this.setState({ validated: true });
  }  
  render() {
    const { validated } = this.state;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            <img alt="Telecine" src={logo} />
        </Modal.Header>
        <Modal.Body>           
          <Form
            noValidate
            validated={validated}
            onSubmit={e => this.handleSubmit(e) }
          >
            { this.state.showSuccess && <FormSent /> }

            { !this.state.showSuccess && <FormInput /> }
            
            
            <Button type="submit" className="btnCta btnPrimario">
              Enviar meus dados
              <FontAwesomeIcon icon="arrow-right" />
            </Button>
          </Form> 
        </Modal.Body>
      </Modal>
    );
  }
}

export default(BootstrapForm);
