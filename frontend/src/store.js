import data from "./data";
import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;

