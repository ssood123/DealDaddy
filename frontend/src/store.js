import data from "./data";
import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartReducer } from "./reducers/cartReducers";
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducer";
import { orderCreateReducer } from "./reducers/orderReducers";

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    },
    cart:{
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[],
        shippingAddress: localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')):{},
        paymentMethod: 'PayPal',
    }
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
})

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;

