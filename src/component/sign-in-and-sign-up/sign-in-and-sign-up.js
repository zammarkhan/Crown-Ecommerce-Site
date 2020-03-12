import React, { Component } from 'react';
import SignIn from '../sign-in/sign-in';
import SignUp from '../sign-up/sign-up';
import '../sign-in-and-sign-up/sign-in-and-sign-up.scss'

class SignInAndSignUp extends Component {
    render() {
        return (
            <div className="sign-in-and-sign-up">
                <SignIn></SignIn>
                <SignUp></SignUp>
            </div>
        );
    }
}

export default SignInAndSignUp;