import React from 'react';
import './card-dropdown.scss';
import CustomButton from '../custom-button/custom-button';

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>
)


export default CartDropDown;