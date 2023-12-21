// import Modal from 'react-bootstrap/Modal'
// import { Button, Modal} from 'react-bootstrap';
import React, { useState } from 'react';
import { Button, Container, Row, Col, Nav, Modal, Breadcrumb, Form, Tabs, Tab, TabContent, Sonnet } from 'react-bootstrap';
import dinner_img from '../../assets/images/mealimg.png';

export default function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow} className="btn-white">
                Pre-defined Meal Plans
            </Button>

            <Modal className="pre-meal" show={show} onHide={handleClose}  centered>
                <div className="mheader">
                    <Row noGutters>
                        <Col md={6}>
                            <Modal.Title className="pre-title">Pre-Define Meal Plans</Modal.Title>
                        </Col>
                        <Col md={6}>
                            <Modal.Header closeButton className="pre-close">
                            </Modal.Header>
                        </Col>
                    </Row>

                </div>

                {/* <Modal.Body style={{ 'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto' }}> */}

                <Modal.Body>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="meal1">
                        <Row noGutters>
                            <Col sm={6}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="meal1">
                                            <div className="pre-defer-img">
                                                <img src={dinner_img} />
                                            </div>
                                            <div className="dinner-title">
                                                <h5>Vegetarian Meal plan</h5>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="meal2">
                                            <div className="pre-defer-img">
                                                <img src={dinner_img} />
                                            </div>
                                            <div className="dinner-title">
                                                <h5>Special Winter Meal Plan</h5>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="meal3">
                                            <div className="pre-defer-img">
                                                <img src={dinner_img} />
                                            </div>
                                            <div className="dinner-title">
                                                <h5>Special Winter Meal Plan</h5>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="meal4">
                                            <div className="pre-defer-img">
                                                <img src={dinner_img} />
                                            </div>
                                            <div className="dinner-title">
                                                <h5>Special Winter Meal Plan</h5>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="meal5">
                                            <div className="pre-defer-img">
                                                <img src={dinner_img} />
                                            </div>
                                            <div className="dinner-title">
                                                <h5>Special Winter Meal Plan</h5>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={6}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="meal1">
                                        <TabContent>
                                            <div className="premeal-contents">
                                                <div className="premeal-content-head">
                                                    <div className="pre-defer-img">
                                                        <img src={dinner_img} />
                                                    </div>
                                                    <div className="dinner-title">
                                                        <h5>Vegetarian Meal plan</h5>
                                                    </div>
                                                </div>                                               
                                                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet olore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci</p>
                                                <div className="appbtn-wrap">
                                                    <button className="applymeal_btn">Apply Meal Plan</button>
                                                </div>
                                            </div>
                                         </TabContent>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="meal2">
                                        <TabContent>
                                            <div className="premeal-contents">
                                                    <div className="premeal-content-head">
                                                        <div className="pre-defer-img">
                                                            <img src={dinner_img} />
                                                        </div>
                                                        <div className="dinner-title">
                                                            <h5>Vegetarian Meal plan</h5>
                                                        </div>
                                                    </div>                                               
                                                    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet olore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci</p>
                                                    <div className="appbtn-wrap">
                                                        <button className="applymeal_btn">Apply Meal Plan</button>
                                                    </div>
                                                </div>
                                         </TabContent>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="meal3">
                                        <TabContent>
                                            <div className="premeal-contents">
                                                    <div className="premeal-content-head">
                                                        <div className="pre-defer-img">
                                                            <img src={dinner_img} />
                                                        </div>
                                                        <div className="dinner-title">
                                                            <h5>Vegetarian Meal plan</h5>
                                                        </div>
                                                    </div>                                               
                                                    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet olore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci</p>
                                                    <div className="appbtn-wrap">
                                                        <button className="applymeal_btn">Apply Meal Plan</button>
                                                    </div>
                                                </div>
                                         </TabContent>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="meal4">
                                        <TabContent>
                                            <div className="premeal-contents">
                                                    <div className="premeal-content-head">
                                                        <div className="pre-defer-img">
                                                            <img src={dinner_img} />
                                                        </div>
                                                        <div className="dinner-title">
                                                            <h5>Vegetarian Meal plan</h5>
                                                        </div>
                                                    </div>                                               
                                                    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet olore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci</p>
                                                    <div className="appbtn-wrap">
                                                        <button className="applymeal_btn">Apply Meal Plan</button>
                                                    </div>
                                                </div>
                                         </TabContent>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="meal5">
                                        <TabContent>
                                            <div className="premeal-contents">
                                                    <div className="premeal-content-head">
                                                        <div className="pre-defer-img">
                                                            <img src={dinner_img} />
                                                        </div>
                                                        <div className="dinner-title">
                                                            <h5>Vegetarian Meal plan</h5>
                                                        </div>
                                                    </div>                                               
                                                    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet olore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci</p>
                                                    <div className="appbtn-wrap">
                                                        <button className="applymeal_btn">Apply Meal Plan</button>
                                                    </div>
                                                </div>
                                         </TabContent>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>



                </Modal.Body>
                {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
            </Modal>
        </>
    );
}

//   render(<Example />);