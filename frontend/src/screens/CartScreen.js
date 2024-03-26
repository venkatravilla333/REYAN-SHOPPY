import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../redux/actions/cartActions';

function CartScreen() {

  let cartState = useSelector((state) => state.cartReducer)

  let dispatch = useDispatch()

  let { cartItems } = cartState

  let total = cartItems.reduce((cum, item) => {
    return cum + (item.price*item.quantity)
  }, 0)
 
  
  return (
    <div className='container my-5'>
      <h3 className='text-center'>Cart Info</h3>
      <div className='col-md-10 text-center m-auto my-4'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              cartItems.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <select value={item.quantity} onChange={(e) => { dispatch(addToCart(item, e.target.value)) }}>
                        {Array.from({ length: item.countInStock }).map(
                          (v, i) => {
                            console.log(v);
                            let optionValue = i + 1;
                            return (
                              <option key={optionValue} value={optionValue}>
                                {optionValue}
                              </option>
                            );
                          }
                        )}
                      </select>
                    </td>
                    <td>{item.quantity * item.price}</td>
                    <td>
                      <i class='bi bi-trash3' onClick={()=>dispatch(deleteFromCart(item))}></i>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <h2 className='mt-4 fs-4'>Total :{total} </h2>
      </div>
    </div>
  );
}

export default CartScreen