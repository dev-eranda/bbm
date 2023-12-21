import React, { Fragment } from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/logo-white.png';
import { Button, Container, Row, Col, Form, FormControl, FormCheck } from 'react-bootstrap';


//import 'common/layouts/header/style.css';
// import './style.css';
import './responsive.css';

function View() {
  return (
    <div className="hm-login">
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
              <div className="login-form-wrap">
                <h2>Login</h2>
                <div className="l-form">
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Keep Me Logged in" />
                    </Form.Group>
                    <Button variant="primary" type="submit" size="lg" className="loginbtn">
                      Log in
                    </Button>
                    <hr className="seperator" />
                    <Button variant="primary" type="submit" size="lg" className="login-fb">
                      Log in with Facebook
                </Button>
                    <div className="no-accont"><p>Don't have an account ? Get your <a href="/register">Free account Now</a></p></div>
                    <div className="no-accont"><a href="">Forgotten password?</a></div>
                    
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