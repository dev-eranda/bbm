import React, { Fragment } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/logo-white.png';
import { Button, Container, Row, Col, Form, FormControl, FormCheck } from 'react-bootstrap';


//import 'common/layouts/header/style.css';
import './style.css';
import './responsive.css';

function View() {
  return (
    <div className="hm-register">
      <Container fluid>
        <Row noGutters>
          <Col md={6}>
            <div className="hm-col1">
              <div className="hm-col-wrap">
                <div className="hmlogo">
                  {/* <img src={logo} className="logo-white" alt="logo" /> */}
                </div>
                <div className="logoing-title">
                  {/* <h1>Members Login</h1> */}
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="hm-col2">
              <div className="register-form-wrap">
                <h2>Register now</h2>
                <div className="l-form">
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} controlId="" column md={6}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                      <Form.Group as={Col} controlId="" column md={6}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="" column md={12}>
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="" column md={12}>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="" column md={12}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="" column md={12}>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" />
                      </Form.Group>
                    </Form.Row>
                    <div className="terms"><p>By registering with "Body by Michael" you agree to our <a href="">Terms & Conditions.</a></p></div>
                    <Button variant="primary" type="submit" size="lg" className="loginbtn">
                      Register Now
                      </Button>
                    <div className="no-accont text-center"><p>Already have an account? <a href="/login"> Login now</a></p></div>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default View; 