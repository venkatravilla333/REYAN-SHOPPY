

export let addToCart = (product, quantity) => {
  // console.log(quantity)
  let cartItem = {
    name: product.name,
    _id: product._id,
    price: product.price,
    countInStock: product.countInStock,
    quantity: quantity
    
  }
  return (dispatch) => {
    dispatch({type: 'ADD_TO_CART', payload: cartItem})
  }
}