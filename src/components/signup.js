import React, { Component } from 'react';
import { Col, Row, Card } from 'reactstrap';
import loginHoc from './hoc/loginHoc';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {

    render() {
        return (
            <div>
                <form>
                    <div className="signup__full-name">
                        <input placeholder="Full Name" type="text"></input>
                    </div>
                    <div className="signup__unit-number">
                        <input placeholder="Unit Number" type="text"></input>
                    </div>
                    <div className="signup__email">
                        <input placeholder="Email" type="email"></input>
                    </div>
                    <div className="signup__password">
                        <input placeholder="Password" type="password"></input>
                    </div>
                    <a className="signup__create-account">Create Account</a><br/>
                    <a className="signup__already-registered" onClick={() => this.props.history.push('/')}>Already Registered</a>
                </form>
            </div>
        )
    }
}

export default loginHoc(SignUp, "Sign Up");