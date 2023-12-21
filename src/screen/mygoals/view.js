import React, { Fragment } from "react"
import logo from '../../assets/images/logo-white.png';
import profile_img from '../../assets/images/profile.png';
import meal_img from '../../assets/images/mealimg.png';
import { Button, Container, Row, Col, Nav, Modal, Breadcrumb, Form } from 'react-bootstrap';


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
            <div className="navigation-wrap mygoal">
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
                          </Breadcrumb>
                        </div>
                        <div className="content-box-wrap my-goal ">
                          <Container>
                            <Row>
                              <Col md={12}>
                                <h1>My Goals</h1>
                                <p>Below are the Goal which you need to complete today</p>
                              </Col>
                              <Col lg={11} md={12}>
                                <div className="content-box mygoal p-0">
                                  <div className="contents-wrapper">
                                    <div className="mygoal-box1">
                                      <div className="goal-content">
                                        <h2>Movement</h2>
                                        <div className="goal-workout">
                                          <div className="gw-wrap">
                                            <span className="timeperiod am">AM</span>
                                            <h3>Morning Workout</h3>
                                          </div>
                                          <div className="gw-wrap">
                                            <span className="timeperiod pm">PM</span><h3>Evening Workout</h3>
                                          </div>
                                        </div>
                                        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet</p>
                                        <a href="" className="btn-goal-completed">Complete Goal</a>
                                      </div>
                                    </div>
                                    <div className="mygoal-box1 completed">
                                      <div className="mygoal-box-inner">
                                        <div className="gw-wrap sub">
                                          <h3>Nutrition</h3>
                                          <h4>Today's Meal</h4>
                                        </div>
                                        <div className="g-completed">
                                          <i className="sprite sprite-tick"></i>
                                          <h5>Goal Completed</h5>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mygoal-box1 not-completed">
                                      <div className="goal-content">
                                        <h2>Breathing</h2>
                                        <div className="goal-workout">
                                          <div className="gw-wrap sub">
                                            <h4>10 Minutes</h4>
                                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                                            Lorem ipsum dolor sit amet</p>
                                          </div>
                                        </div>
                                        <a href="" className="btn-goal-completed">Complete Goal</a>
                                      </div>
                                    </div>
                                    <div className="mygoal-box1 not-completed">
                                      <div className="goal-content">
                                        <h2>Hydration</h2>
                                        <div className="goal-workout">
                                          <div className="gw-wrap sub">
                                            <h4>5/10 Cups</h4>
                                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                                            Lorem ipsum dolor sit amet</p>
                                          </div>
                                        </div>
                                        <a href="" className="btn-goal-completed">Complete Goal</a>
                                      </div>
                                    </div>
                                    <div className="mygoal-box1 not-completed">
                                      <div className="goal-content">
                                        <h2>Sleep Time</h2>
                                        <div className="goal-workout">
                                          <div className="gw-wrap sub">
                                            <h4>7.5 Hours</h4>
                                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                                            Lorem ipsum dolor sit amet</p>
                                          </div>
                                        </div>
                                        <a href="" className="btn-goal-completed">Complete Goal</a>
                                      </div>
                                    </div>
                                    <div className="mygoal-box1 not-completed">
                                      <div className="goal-content">
                                        <h2>Meditation</h2>
                                        <div className="goal-workout">
                                          <div className="gw-wrap sub">
                                            <h4>7.5 Hours</h4>
                                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                                            Lorem ipsum dolor sit amet</p>
                                          </div>
                                        </div>
                                        <a href="" className="btn-goal-completed">Complete Goal</a>
                                      </div>
                                    </div>
                                    <div className="mygoal-box1 not-completed">
                                      <div className="goal-content">
                                        <h2>Weight</h2>
                                        <div className="goal-workout">
                                          <div className="gw-wrap sub">
                                            <h4>54 Kg</h4>
                                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                                            Lorem ipsum dolor sit amet</p>
                                          </div>
                                        </div>
                                        <a href="" className="btn-goal-completed">Complete Goal</a>
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