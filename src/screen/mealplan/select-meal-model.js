// import Modal from 'react-bootstrap/Modal'
// import { Button, Modal} from 'react-bootstrap';
import React, { useState } from 'react';
import { Button, Container, Row, Col, Nav, Modal, Breadcrumb, Form, Tabs, Tab, TabContent, Sonnet } from 'react-bootstrap';
// import CustomScroll from 'react-custom-scroll';
import dinner_img from '../../assets/images/mealimg.png';

export default function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button onClick={handleShow} className="btn-white">
        Pre-defined Meal Plans
        </Button>   */}
      <div className="meal-name">
        <a className="meallink" onClick={handleShow} >
          <h4>Breakfast</h4>
          <h5>Vegetarian Meal</h5>
        </a>
      </div>
      <Modal className="dinner-modal" show={show} onHide={handleClose} centerd>
        <Modal.Header closeButton>
          <Modal.Title>Select Dinner Meal</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ 'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto' }} > 
          <div className="select-dinner-wrap">
    
            <div className="dinner-row">
              <div className="dinnerimg">
                <img src={dinner_img} />
              </div>
              <div className="dinner-title">
                <h5>3 Minutes Omelette</h5>
              </div>
              <div className="tickwrap">
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="dinner-tick">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                    // label={`default ${type}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="dinner-row">
              <div className="dinnerimg">
                <img src={dinner_img} />
              </div>
              <div className="dinner-title">
                <h5>3 Minutes Omelette</h5>
              </div>
              <div className="tickwrap">
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="dinner-tick">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                    // label={`default ${type}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="dinner-row">
              <div className="dinnerimg">
                <img src={dinner_img} />
              </div>
              <div className="dinner-title">
                <h5>3 Minutes Omelette</h5>
              </div>
              <div className="tickwrap">
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="dinner-tick">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                    // label={`default ${type}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="dinner-row">
              <div className="dinnerimg">
                <img src={dinner_img} />
              </div>
              <div className="dinner-title">
                <h5>3 Minutes Omelette</h5>
              </div>
              <div className="tickwrap">
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="dinner-tick">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                    // label={`default ${type}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="dinner-row">
              <div className="dinnerimg">
                <img src={dinner_img} />
              </div>
              <div className="dinner-title">
                <h5>3 Minutes Omelette</h5>
              </div>
              <div className="tickwrap">
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="dinner-tick">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                    // label={`default ${type}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="dinner-row">
              <div className="dinnerimg">
                <img src={dinner_img} />
              </div>
              <div className="dinner-title">
                <h5>3 Minutes Omelette</h5>
              </div>
              <div className="tickwrap">
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="dinner-tick">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                    // label={`default ${type}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="dinner-row">
              <div className="dinnerimg">
                <img src={dinner_img} />
              </div>
              <div className="dinner-title">
                <h5>3 Minutes Omelette</h5>
              </div>
              <div className="tickwrap">
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="dinner-tick">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                    // label={`default ${type}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="dinner-row">
              <div className="dinnerimg">
                <img src={dinner_img} />
              </div>
              <div className="dinner-title">
                <h5>3 Minutes Omelette</h5>
              </div>
              <div className="tickwrap">
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="dinner-tick">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                    // label={`default ${type}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="dinner-row">
              <div className="dinnerimg">
                <img src={dinner_img} />
              </div>
              <div className="dinner-title">
                <h5>3 Minutes Omelette</h5>
              </div>
              <div className="tickwrap">
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="dinner-tick">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                    // label={`default ${type}`}
                    />
                  </div>
                ))}
              </div>
            </div>
   
          </div>
         
        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className="addrecipes">Add Recipes</Button>           
          </Modal.Footer>
        </Modal>
    </>
  );
}

//   render(<Example />);