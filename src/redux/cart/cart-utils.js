export const   addItemtoCart = (cartItems,cartItemToAdd)=>{
    
    const existingCartItem = cartItems.find(cartItem =>  cartItem.id === cartItemToAdd.id);
   
    if (existingCartItem){
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id
            ? {...cartItem,quantity: cartItem.quantity + 1}
            : cartItem)

    }
return [...cartItems, {...cartItemToAdd,quantity:1}]

}

export const RemoveItem = (cartItems,cartRemoveItems)=> {

    const existingCartItem = cartItems.find (cartItem => cartItem.id === cartRemoveItems.id)

    if(existingCartItem.quantity ===1){
        return cartItems.filter(cartItem => cartItem.id !== cartRemoveItems.id)
    }

    return  cartItems.map(cartItem => cartItem.id === cartRemoveItems.id ? 
         {...cartItem,quantity: cartItem.quantity -1} : cartItem
    )
}