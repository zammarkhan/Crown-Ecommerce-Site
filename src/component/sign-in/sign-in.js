import '../sign-in/sign-in.scss';
import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends Component {
   constructor(props){
       super(props)
       this.state = {
           email: "",
           password: ""
       }
   }
   handleSubmit= async event=>{
       event.preventDefault();
       const {email,password} = this.state;
       try{
          await auth.signInWithEmailAndPassword(email,password);
          this.setState({
              email:'',
              password:''
          })

       }
       catch(error)
       {
           console.log(error)
       }

   }
   handleChange=(event)=>{
        const {name,value} = event.target;
        this.setState({
            [name] : value
        })
   }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account </h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                
                <FormInput name="email" label="email" value={this.state.email} onChange={this.handleChange} type="email" required>
                </FormInput>    
                
                <FormInput name="password" label="password" value={this.state.password} onChange={this.handleChange} type="password" required>
                </FormInput>    
              <div className="buttons">  
                <CustomButton type="submit">
                    Sign In
                </CustomButton>

                <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>
                    Sign In With Google
                </CustomButton>
                </div>
                </form>                
            </div>
        );
    }
}

export default SignIn;