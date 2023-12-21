import React, { Fragment } from "react"
import logo from '../../assets/images/logo-white.png';
import profile_img from '../../assets/images/profile.png';
import meal_img from '../../assets/images/mealimg.png';
import { Button, Container, Row, Col, Nav, Modal, Breadcrumb, Form, Tabs, Tab, TabContent } from 'react-bootstrap';


//import 'common/layouts/header/style.css';
import './style.css';
import './responsive.css';

// export default function App() {
//   const [isActive, setActive] = useState("false");

//   const handleToggle = () => {
//     setActive(!isActive);
//   };
//   return (
//     <div className={isActive ? "app" : "container"}>      <h1>Hello react</h1>
//       <button onClick={handleToggle}>Toggle class</button>
//     </div>
//   );
// }
function View(props) {
  function handlemenutoggle() {
    props.handlemenutoggle(true);
  }
  return (
    <div className="dashboard-wrap">
      <Container fluid>
        <Row>
          <Col md={12} className="">
            <div className="navigation-wrap">
              <img src={logo} className="logo-white" alt="logo" />
              <div className="navigation">
                {/* <div class="navigation open"> add open class to show mobile menu */}
                <Nav className="flex-column">
                  <Nav.Item className="active">
                    <Nav.Link href="/home">Dashboard <i className="sprite sprite-dashboard_1_"></i></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Workout Calendar <i className="sprite sprite-calendar"></i></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">My Profile <i className="sprite sprite-user"></i></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Goals <i className="sprite sprite-dumbell"></i></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">My Shopping List <i className="sprite sprite-bag"></i></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">My Meal Plan <i className="sprite sprite-meal"></i></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Subscribe <i className="sprite sprite-renew"></i></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Logout <i className="sprite sprite-logout-1"></i></Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <div className="site-content-wrap">
              <Row noGutters>
                <Col lg={9} md={8}>
                  <div className="content-wrap inner">
                    <div className="mobile-logo">
                      <img src={logo} className="logo-white" alt="logo" />
                    </div>
                    <div className="mobilemenu">
                      <div id="nav-icon1" onClick={handlemenutoggle}>
                        {/* <div id="nav-icon1" class="open" > add open class to change menu icon*/}
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div className="content-header">
                      <div className="t-date-wrap">
                        <h3>12 December 2020</h3>
                        <h4>Evening, <span className="profilename">John Doe</span></h4>
                      </div>
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
                    <div className="the-contents">
                      <div className="summery-wrap inner">
                        <div className="breadcrumb-wrap">
                          <Breadcrumb>
                            <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item href="">My Goals </Breadcrumb.Item>
                            <Breadcrumb.Item href="">Hydration</Breadcrumb.Item>
                          </Breadcrumb>
                        </div>
                        <div className="content-box-wrap my-goal ">
                          <Container>
                            <Row>
                              <Col md={12}>
                                <div className="title-header">
                                  <h1>Hydration</h1>
                                  <div className="swichwrap">
                                    <Form.Check
                                      type="switch"
                                      id="custom-switch"
                                      label="Mark as done"
                                    />
                                  </div>
                                </div>
                              </Col>
                              <Col md={12}>
                                <div className="content-box  p-0">
                                  <div className="contents-wrapper">
                                    <div className="today-workout-wrap">
                                      <div className="pillinner-wrap">
                                      <div className="workpill-wrap">
                                        <div className="cups-required">
                                          <h3>15</h3>
                                        </div>
                                        <div className="havedrunk">
                                          <button class="plusbtn"></button>
                                          <Form.Control type="text" placeholder="" value="11" />
                                          <button class="minusbtn"></button>
                                        </div>
                                      </div>
                                      <div className="cup-req-text">
                                        <div className="pilltext">
                                          <h5>Cups Required</h5>
                                          <h6>How many did you have today</h6>
                                        </div>
                                        <div className="pillbtn-wrap">
                                            <button className="btn-submitime">Submit Time</button> 
                                        </div>
                                                                               
                                        
                                      </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={4}>
                  <div className="workout-col">
                    <h2 className="workout-title">Today's Workout</h2>
                    <div className="workout-chart text-center">
                      chart module
                      </div>
                    <div className="workout-step-wrap">
                      <div className="today-workout">
                        <h3>Movement</h3>
                        <div className="moment-wrap">
                          <span className="mtime">AM</span>
                          <h5>Today's Workout</h5>
                        </div>
                      </div>
                      <div className="today-workout-steps completed">
                        <h3>Breathing</h3>
                        <div className="moment-wrap">
                          <h5>Completed</h5>
                          <div className="complete-box"><i className="sprite sprite-tick"></i>
                          </div>
                        </div>
                      </div>
                      <div className="today-workout-steps">
                        <h3>Hydration</h3>
                        <div className="moment-wrap">
                          <h5>5/10 Cups</h5>
                        </div>
                      </div>
                      <div className="today-workout-steps">
                        <h3>Sleep Time</h3>
                        <div className="moment-wrap">
                          <h5>7.5 Hours</h5>
                        </div>
                      </div>
                      <div className="today-workout-steps">
                        <h3>Meditation</h3>
                        <div className="moment-wrap">
                          <h5>7.5 Hours</h5>
                        </div>
                      </div>
                      <div className="today-workout-steps">
                        <h3>Weight</h3>
                        <div className="moment-wrap">
                          <h5>54 Kg</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>





    </div>
  );
}

export default View; 