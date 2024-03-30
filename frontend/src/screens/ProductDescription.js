import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'
import Spinner from '../components/Spinner'
import Error from '../components/Error'
// import { products } from '../products'

function ProductDescription() {

  let getProductByIdState = useSelector((state) => state.getProductByIdReducer)
  
  let { loading, product, error } = getProductByIdState
  console.log(product)
  
 
  let [quantity, setQuantity] = useState(1)

  let dispatch = useDispatch()

  let { id } = useParams()
  let productId = id

  // let productdata = products.find((product) => productId == product.id)
  // console.log(productId)


  useEffect(() => {
   dispatch(getProductById(productId))
  }, [])

  let addtocart = () => {
    //  alert(quantity)
    dispatch(addToCart(product, quantity))
 }
  return (
    <div className='container'>
      {loading ? (
        <Spinner/>
      ) : error ? (
        <Error error='Something went wrong'/>
      ) : (
        <div className='row my-5'>
          <div className='col-md-6 text-left card w-50 p-3'>
            <h2 className='fw-bold mt-3 text-center'>{product.name}</h2>
            <div className='text-center'>
              <img
                src={product.image}
                alt=''
                className='img-fluid my-3 w-75'
                style={{ height: '465px' }}
              />
            </div>

            <p className='my-3 fw-medium'>
              <span style={{ fontWeight: 'bold' }}>Description: </span>
              {product.description}
            </p>
          </div>
          <div className='col-md-6  text-center'>
            <p className='fs-5 fw-bold mt-3'>Price: {product.price}</p>
            <div className='d-flex justify-content-around mt-5'>
              <h5>Select Quantity</h5>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {Array.from({ length: product.countInStock }).map((v, i) => {
                  console.log(v);
                  let optionValue = i + 1;
                  return (
                    <option key={optionValue} value={optionValue}>
                      {optionValue}
                    </option>
                  );
                })}
              </select>
              <button
                className='btn btn-dark w-25 fw-medium'
                onClick={addtocart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDescription