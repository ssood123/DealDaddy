import React from 'react';
import data from './data';
import Product from './components/Product';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import cartScreen from './screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';

function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">DealDaddy</a>
        </div>
        <div>
            <a href="/cart">Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}</a>
            {
              userInfo ? (
                <div className="dropdown">
                <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i> </Link>
                <ul className="dropdown-content">
                  <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                </ul>
                </div>
              ) : 
              (
                <Link to="/signin">Sign In</Link>
              )
            }
        </div>
    </header>
    <main>
      <Route path="/cart/:id?" component={cartScreen}></Route>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/signin" component={SigninScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
    </main>
    <footer className="row center">
        All rights reserved
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
