import React from 'react';
import './checkout.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart-selectors';
import {selectCartTotal} from '../../redux/cart/cart-selectors'
import CartItem from '../cart-item/cart-item';
import CheckoutItems from '../checkout-items/checkout-items';

const CheckoutPage = ({cartItems,total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItems key={cartItem.id} cartItem={cartItem}/>)
        }

        <div className='total'>
        <span>TOTAL:${total}</span>

        </div>

    </div>
)


const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);