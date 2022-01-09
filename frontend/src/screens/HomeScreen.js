import React, { useEffect } from 'react';
//import data from '../data';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
    //const [products, setProducts] = useState([])
    //const [loading, setLoading] = useState(false);
    //const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const {loading, error, products } = productList;

    useEffect(() => {
      /*
      const fetchData = async () => {
        try {
          setLoading(true);
          const {data} = await axios.get('/api/products');
          setLoading(false);
          setProducts(data);
        } catch(err) {
          setError(err.message);
          setLoading(false);
        }
      };
      fetchData();
      */
     dispatch(listProducts())
    }, [])
    return (
      <div>
        {loading ? (<LoadingBox></LoadingBox>) : 
        error? (<MessageBox variant="danger">{error}</MessageBox>) :
        <div className="row center">
          {products.map(product => (
           <Product product={product} />
          ))}
          </div>
        }
      </div>
    )
}