import React, { Component } from "react";
import AnimatedWrapper from "../../wrappers/AnimatedWrapper";
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from "react-router-dom";
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';


class RegisterComponent extends Component {

    render() {
        return (
            <div>

                <h1 style={{fontWeight: 100}}>Join the family!</h1>

                <hr style={{width: 250}}/>

                <p> We hope you are excited as we are, please fill out the form to complete your registration: </p>


            </div>
        )
    }
}

const Register = AnimatedWrapper(RegisterComponent);
export default Register;