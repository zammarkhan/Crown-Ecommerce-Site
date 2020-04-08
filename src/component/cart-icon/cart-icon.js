import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.scss';
import { connect } from 'react-redux';
import {ToggleCartHidden} from '../../redux/cart/cart-actions';
import {selectCartItemsCount} from '../../redux/cart/cart-selectors';

const CartIcon = ({ItemCount,ToggleCartHidden}) => (
    <div className='cart-icon' onClick={ToggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className='item-count'>{ItemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
   
       ToggleCartHidden: () => dispatch(ToggleCartHidden())
   
})

const mapStateToProps = (state) => ({
    ItemCount : selectCartItemsCount(state) })

export default connect(mapStateToProps,mapDispatchToProps) (CartIcon);