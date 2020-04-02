import CartActionsTypes from './/cart-actions.types';

export const ToggleCartHidden = ( ) => ({
    type : CartActionsTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type:CartActionsTypes.ADD_ITEMS,
    payload: item
})