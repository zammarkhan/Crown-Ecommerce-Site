import SHOP_DATA from '../../component/shop/shop_data';

const INITIAL_STATE = {
    collection : SHOP_DATA
}


const shopReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        default :
        return state
    }
}



export default shopReducer;