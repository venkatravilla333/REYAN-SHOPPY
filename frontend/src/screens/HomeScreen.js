import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions/productActions';


function HomeScreen() {
  let dispatch = useDispatch()
  let getAllProductsState = useSelector((state) => state.getAllProductsReducer)
  let { loading, products, error } = getAllProductsState
  // let [products, setProducts] = useState([]);
  
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  return (
    <div className='container-fluid mt-3'>
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        
           <div className='row justify-content-center'>
        {
          products.map((product) => {
            return (
              <div className='col-md-3 card m-3 p-3'>
                <Link to={`product/${product._id}`}>
                  <img
                    src={product.image}
                    alt=''
                    className='img-fluid'
                    class='myimg'
                  />
                  <h2>{product.name}</h2>
                  <h2>Price: {product.price}</h2>
                  <h2>Rating: {product.rating}</h2>
                </Link>
              </div>
            );
          })
        }

      </div> 
        
      )}
    </div>
  );
}

export default HomeScreen