import {combineReducers} from 'redux';
import productsReducer from './products/productsReducer';
import cartReducer from './cart/cartReducer';

const rootReducer=combineReducers({
    productStete:productsReducer,
    cartState:cartReducer
})

export default rootReducer; 