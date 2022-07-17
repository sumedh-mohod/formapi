import React, { useState } from "react";
import "./Form.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Form = () => {
  const [formData, setFormData] = useState({});

  const onInputChange = (event) => {
    formData[event.target.name] = event.target.value;
    setFormData(formData);
    // console.log("form object", formData);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form data object", formData);
    localStorage.setItem('Data', JSON.stringify(formData));
  }

  return (
    <Container>
      <div className="form_container">
            <h3>Login Form</h3>
        <form onSubmit={submitHandler}>
          <Row className="mt-5">
            <Col sm={6}>
              <div className="group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={onInputChange}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Name</label>
              </div>
            </Col>
            <Col sm={6}>
              <div className="group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={onInputChange}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Email</label>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <div className="group">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={onInputChange}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Phone</label>
              </div>
            </Col>
            <Col sm={6}>
              <div className="group">
                <select name="country" id="country" className="select" onChange={onInputChange} defaultValue={'DEFAULT'}>
                  <option disabled="disabled" value="DEFAULT">--Please Select--</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Other">Other</option>
                </select>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Select Country</label>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 3 }}>
              <input type="radio" name="gender" value="Male" onChange={onInputChange}/> <span className="radio">Male</span>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 3 }}>
              <input type="radio" name="gender" value="Female" onChange={onInputChange}/> <span className="radio">Female</span>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 3 }}>
              <input type="radio" name="gender" value="Other" onChange={onInputChange}/> <span className="radio">Other</span>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <button type="subnit" className="button buttonBlue">
                Submit
              </button>
            </Col>
          </Row>
        </form>
      </div>
    </Container>
  );
};

export default Form;
