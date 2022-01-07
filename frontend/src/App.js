import React from 'react';
import data from './data';
import Product from './components/Product';
import {BrowserRouter, Route} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">DealDaddy</a>
        </div>
        <div>
            <a href="/">Cart</a>
            <a href="/">Sign In</a>
        </div>
    </header>
    <main>
      <Route path="/product/:id" component={ProductScreen}></Route>
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
