import React, { Component } from 'react';
import InputField from '../components/InputField';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <div>
                <h1>sign up here</h1>
                    <InputField labelName="Email" inputType="email" />
                    <InputField labelName="Password" inputType="password" />
            </div>
        );
    }
}