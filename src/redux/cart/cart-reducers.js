
import CartActionsTypes from '../cart/cart-actions.types';
import { addItemtoCart,RemoveItem} from '../cart/cart-utils';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []

}

const CartReducer = (state=INITIAL_STATE,action)=> {
    switch(action.type){
        case CartActionsTypes.TOGGLE_CART_HIDDEN :
            return{
                ...state,
                hidden: !state.hidden
            }
        case CartActionsTypes.ADD_ITEMS : 
        return{
            ...state,
            cartItems: addItemtoCart(state.cartItems,action.payload)
        }
        case CartActionsTypes.CLEAR_ITEM_FROM_CART : 
        return{
            ...state,
            cartItems : state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
        }
        
        case CartActionsTypes.REMOVE_ITEM : 
        return {
            ...state,
            cartItems: RemoveItem(state.cartItems,action.payload)
        }
        default : 
        return state 
    }
}

export default CartReducer;