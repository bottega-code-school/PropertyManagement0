import React, { Component } from 'react';

const loginHoc = (WrappedComponent, arg1) => {
    console.log(arg1);
    return () => {
        <div>
            <WrappedComponent/>
        </div>
    }
}
export default loginHoc;