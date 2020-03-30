import React, { Component } from 'react';
import '../header/header.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../card-dropdown/card-dropdown';
const Header  = ({currentUser,hidden})=>{
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
                        currentUser ? 
                        <div className='option' onClick={()=> auth.signOut()}>SIGN OUT </div>
                        :
                        <Link className='option' to ='/signin'>
                            SIGN IN 
                        </Link>
                    }
                      <CartIcon/>


                </div>
                {hidden ? null : <CartDropDown/>}
             
            </div>)
}

const mapStateToProps=({user:{currentUser},cart:{hidden}})=> {
   return {currentUser,hidden
}}

export default connect(mapStateToProps)(Header);