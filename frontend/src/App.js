import React from 'react';
import data from './data';
import Product from './components/Product';

function App() {
  return (
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
        <div className="row center">
          {
            data.products.map(product => (
             <Product product={product} />
            ))
          }
           
        </div>
    </main>
    <footer className="row center">
        All rights reserved
    </footer>
</div>
  );
}

export default App;
