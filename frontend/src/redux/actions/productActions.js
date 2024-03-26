
import axios from 'axios'


export let getAllProducts = () => {
  return (dispatch) => {
    dispatch({ type: 'GET_PRODUCTS_REQUEST' })
    axios
      .get('http://localhost:5000/getallproducts')
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

export let getProductById = (productid) => {
  return (dispatch) => {
    dispatch({ type: 'GET_PRODUCTBYID_REQUEST' })
    axios
      .post('http://localhost:5500/getproductbyid', {productid})
      .then((res) => {
        console.log(res.data);
        dispatch({ type: 'GET_PRODUCTBYID_SUCCESS', payload: res.data});
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: 'GET_PRODUCTBYID_FAILURE', payload: error.message });
      });
  }
}
