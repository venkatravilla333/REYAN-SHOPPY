import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
// import { products } from '../products'

function ProductDescription() {

  let getProductByIdState = useSelector((state) => state.getProductByIdReducer)
  
  let { loading, product, error } = getProductByIdState
  // console.log(product)

 let dispatch = useDispatch()

  let { id } = useParams()
  let productId = id
  // console.log(productId)

  // let productdata = products.find((product) => productId == product.id)
  // console.log(productdata)
  // console.log(productId)


  useEffect(() => {
   dispatch(getProductById(productId))
  }, [])
  

  return (
    <div className='container'>
      {loading ? (
        <h3>Loading</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className='row my-5'>
          <div className='col-md-6 text-left card w-50 p-3'>
            <h2 className='fw-bold mt-3'>{product.name}</h2>
            <img
              src={product.image}
              alt=''
              className='img-fluid my-3 w-75'
              style={{ height: '480px' }}
            />
            <p className='my-3 fw-medium'>
              <span style={{ fontWeight: 'bold' }}>Description: </span>
              {product.description}
            </p>
          </div>
          <div className='col-md-6  text-center'>
            <p className='fs-5 fw-bold mt-3'>Price: {product.price}</p>
            <button className='btn btn-dark'>Add To Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDescription