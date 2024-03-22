
import axios from 'axios'


export let getAllProducts = () => {
  return (dispatch) => {
    dispatch({ type: 'GET_PRODUCTS_REQUEST' })
    axios
      .get('http://localhost:5500/products')
      .then((res) => {
        console.log(res.data);
        dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: res.data});
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: 'GET_PRODUCTS_FAILURE', payload: error.message });
      });
  }
}