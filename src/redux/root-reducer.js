import {combineReducers} from 'redux';
import userReducer from '../redux/user/user-reducer';
import CartReducer from '../redux/cart/cart-reducers';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from '../redux/Directory/directory-reducer';
import shopReducer from '../redux/shop/shop-reducer';
const persistConfig = {
    key : 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart : CartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig,rootReducer)