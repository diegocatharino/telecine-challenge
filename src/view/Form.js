import React, { Component } from "react";
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import logo from '../img/tcplay.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MaskedFormControl from 'react-bootstrap-maskedinput';
import FormSent from "./FormSent";

class BootstrapForm extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
  }
  showSuccess(){
    console.log("Tela de sucesso");
    
    
  }
  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {

      console.log("INVALID FORM - not submitted");
      event.preventDefault();
      event.stopPropagation();
    } else{
      console.log("VALID FORM - submitted");
      this.showSuccess();
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
            <img src={logo} />
        </Modal.Header>
        <Modal.Body>
          { this.state.validated && <FormSent /> }
          { !this.state.validated && 
          <Form
            noValidate
            validated={validated}
            onSubmit={e => this.handleSubmit(e)}
          >
            <Form.Row><span>Para começar a usar seus 7 dias grátis precisamos de alguns dados</span></Form.Row>      
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nome"
                  defaultValue=""
                />
                <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="exemplo@email.com.br"
                  defaultValue=""
                />
                <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Insira um formato válido de email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomCPF">
                <Form.Label>CPF</Form.Label>
                
                <MaskedFormControl 
                  required
                  type='text' 
                  placeholder="999.999.999-99" 
                  required mask='111.111.111-11' 
                />

                <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>
              </Form.Group>              
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Cidade</Form.Label>
                <Form.Control type="text" placeholder="Cidade" required />
                <Form.Control.Feedback type="invalid">
                  Insira uma cidade.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Estado</Form.Label>
                <Form.Control type="text" placeholder="Estado" required />
                <Form.Control.Feedback type="invalid">
                  Insira um estado.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Data de Nascimento</Form.Label>
                <MaskedFormControl type='text' placeholder="Data de Nascimento" required mask='11/11/1111' />
                <Form.Control.Feedback type="invalid">
                  Insira sua data de nascimento.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Check
                label="Aceito receber novidades da Telecine no meu email"
              />
            </Form.Group>
            <Button type="submit" className="btnCta btnPrimario">
              Enviar meus dados
              <FontAwesomeIcon icon="arrow-right" />
            </Button>
          </Form> 
          }
        </Modal.Body>
      </Modal>
    );
  }
}

class FormModal extends React.Component {
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

        <BootstrapForm
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
    );
  }
}

export default(FormModal);
