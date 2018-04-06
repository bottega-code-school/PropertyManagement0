import React, { Component } from 'react';
import loginHoc from './hoc/loginHoc'
import { Col, Row, Card } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <div>
        <form>

          <Row>
            <Col>
              <input placeholder='login' type='text'></input><br/>
            </Col>
          </Row>

          <Row>
            <Col>
              <input placeholder='password' type='text'></input>
            </Col>
          </Row>

          <Row>
            <Col>
               <a>Login</a>
            </Col>
          </Row>

          <Row>
            <Col>
              <a>Forgot Password</a>
            </Col>
            <Col>
             <a className="login__register-here" onClick={() => this.props.history.push('/signUp')}>Not a member? Register here.</a>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default loginHoc(Login, 'Login');