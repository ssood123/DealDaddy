import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import data from '../data';
import Product from '../components/Product';

export default function HomeScreen() {
    const [products, setProducts] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        const {data} = await axios.get('/api/products');
        console.log('data');
        console.log(data);
        setProducts(data);
      };
      fetchData();
    }, [])
    return (
        <div className="row center">
        {
          products.map(product => (
           <Product product={product} />
          ))
        }
         
      </div>
    )
}