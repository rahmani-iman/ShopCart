import { combineReducers } from "redux";
import productsReducer from './products/productsReducer';
import cartReducer from './cart/cartReducer';
import searchValuesReducer from './searchValues/searchValuesReducer';

const rootReducer = combineReducers({
    productsState: productsReducer,
    cartState: cartReducer,
    searchState: searchValuesReducer
})

export default rootReducer;