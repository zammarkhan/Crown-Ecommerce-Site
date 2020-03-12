import React, { Component } from 'react';
import '../header/header.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link className="logo-container" to="/"> 
                <Logo className="logo">

                </Logo>
                </Link>
                <div className ="options">
                    <Link className="option" to="/shop">SHOP</Link>
                    <Link className="option"to="/shop">CONTACT</Link>
                    {
                        this.props.currentUser ? 
                        <div className='option' onClick={()=> auth.signOut()}>SIGN OUT </div>
                        :
                        <Link className='option' to ='/signin'>
                            SIGN IN 
                        </Link>
                    }

                </div>
            </div>
        );
    }
}

export default Header;