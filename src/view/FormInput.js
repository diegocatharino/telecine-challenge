import React from "react";
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import MaskedFormControl from 'react-bootstrap-maskedinput';

class FormInput extends React.Component {
  render() {  
    return (
      <div className="FormContent">
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
      </div>
    );
  }
}


export default(FormInput);
