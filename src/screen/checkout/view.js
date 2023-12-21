import React, { Fragment } from "react"
import logo from '../../assets/images/logo-white.png';
import profile_img from '../../assets/images/profile.png';
import mastercard_img from '../../assets/images/mastercard-logo.png';
import visa_img from '../../assets/images/visa-icon.png';
import { Button, Container, Row, Col, Form} from 'react-bootstrap';



//import 'common/layouts/header/style.css';
import './style.css';
import './responsive.css';


function View(props) {
  function handlemenutoggle() {
    props.handlemenutoggle(true);

  }
  return (
    <div className="dashboard-wrap">
      <div className="checkout-header-wrapper">
      <Container>
        <Row>
            <Col md={12} className=""> 
            <div className="check-col1">
              <a href=""><img src={logo} className="logo-white" alt="logo" /></a>
              <h2>Checkout</h2> 
            </div> 
            <div className="content-header-check">
              <div className="profile-col">
                <div className="profile-image">
                  <img src={profile_img} className="img-fulid" />
                </div>
                <div className="userinfo">
                  <h2>John Doe</h2>
                  <h3>Paid Subscriber</h3>
                </div>
                <a className="logout-btn" href=""><i className="sprite sprite-logout-dark"></i></a>
              </div>
            </div>               
            </Col>
          </Row>
      </Container>
      </div>
      <div className="checkout-content-wrap">
      <Container>
        <Row>
            <Col md={12} className="">
              <div className="order-box">
                <h3>Your Order</h3>
                <div className="order-info">
                  <div className="oder-info-wrap">
                    <div className="or-info">
                    <h4>Monthly Subscription</h4>
                    <p>You will have access to all features of the APP for 31 Days</p>
                    </div>                  
                    <h5>AUD 10.00</h5>
                  </div>
                </div>
                <div className="totalwrap">
                  <h5>Total</h5>
                  <h6>AUD 10.00</h6>
                </div>
              </div>
              <div className="stripe-box">
                <h3>Pay with Stripe</h3>
                <div className="sb-form">     
                  <Row>
                    <Col md={6}>
                    <Form.Label>Name</Form.Label>
                      <Form.Control />
                    </Col>
                    <Col md={6}>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control/>
                    </Col>
                  </Row>
                  <Row>
                  <Col md={12}>
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control />
                    </Col>
                  </Row>
             
                </div>
                <Row>
                <Col md={6}>
                  <div className="payment-wrap">
                    <div className="paylogo">
                      <p>Payments can be done via</p>
                      <img src={mastercard_img} className="img-fluid"/>
                      <img src={visa_img} className="img-fluid"/>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                <Button variant="primary" type="submit" className="paynow">Pay now </Button>
                </Col>
                </Row>
              </div>
            </Col>
        </Row>
     </Container>
       </div>
    </div>
  );
}

export default View; 