import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';

function HomeScreen() {

  let [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5500/products')
      .then((res) => {
        console.log(res.data)
        setProducts(res.data)
    })
      .catch((error) => {
      console.log(error)
    })
  })
  return (
    <div className='container-fluid mt-3'>
      <div className='row justify-content-center'>
        {
          products.map((product) => {
            return (
              <div className='col-md-3 card m-3 p-3'>
                <Link to={`product/${product.id}`}>
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
    </div>
  )
}

export default HomeScreen