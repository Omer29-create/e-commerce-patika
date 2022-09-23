import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Authen } from '../context/Auth';


const Login = () => {

  const {tikla, mailRef, passwordRef} = useContext(Authen);

  return (
    <div>
      <Form onSubmit={tikla}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" ref={mailRef} placeholder="email@example.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" ref={passwordRef} placeholder="Password" />
        </Col>
      </Form.Group>
      <Button onClick={tikla} type="submit" value="Submit" />
    </Form>
    </div>
  );
}



export default Login;
