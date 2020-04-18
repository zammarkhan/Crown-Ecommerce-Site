import CartActionsTypes from './/cart-actions.types';

export const ToggleCartHidden = ( ) => ({
    type : CartActionsTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type:CartActionsTypes.ADD_ITEMS,
    payload: item
})

export const ClearItemFromCart = item => ({
    type: CartActionsTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeItem = item => ({
    type: CartActionsTypes.REMOVE_ITEM,
    payload: item

})