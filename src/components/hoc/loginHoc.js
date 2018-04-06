import React, { Component } from 'react';

const loginHoc = (WrappedComponent, loginOrSignup) => {
    return (props) => (
        <div>
            <h1>Welcome to HOA Manager!</h1> 
            <h3>Please {loginOrSignup} to Continue</h3>
            <WrappedComponent history={props.history} />
        </div>
    )
}

export default loginHoc;