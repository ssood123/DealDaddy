import React from 'react';
import data from './data';
import Product from './components/Product';
import {BrowserRouter, Route} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import cartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';

function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart

  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">DealDaddy</a>
        </div>
        <div>
            <a href="/">Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}</a>
            <a href="/signin">Sign In</a>
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
