import React from 'react';
import './custom-button.scss';


const CustomButton = ({children,isGoogleSignIn,inverted,cartDropDown, ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : ''}${cartDropDown ? 'cartDropDown': ''}${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {
            children
        }

    </button>
)

export default CustomButton;