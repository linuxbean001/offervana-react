import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

class Login extends Component {
  render() {
    return (
      <div>
        <section id="main-form">
          <div className="container">
            <div className="row">
              <div className="banner-heading">
                <h3>Please Log In
                    <aside className="clearfix">New User ? <Link to={'/signup.html'} className="call-to-action"> Sign Up Here</Link></aside>
                </h3>
              </div>
              <div className="main-login main-center">
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="cols-sm-2 control-label">Your Email</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="fa fa-envelope"></i> </span>
                      <Form.Control type="email" placeholder="Enter your Email" />
                    </div>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="fa fa-lock fa-lg"></i> </span>
                      <Form.Control type="password" placeholder="Enter your Password" />
                    </div>
                  </Form.Group>
                  <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Remember me" />
                    <Form.Label>Forgot Password</Form.Label>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="normal-btn btn-block" style={{ "maxWidth": "inherit", "border": "none" }}>
                    Submit
                                   </Button>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Login;