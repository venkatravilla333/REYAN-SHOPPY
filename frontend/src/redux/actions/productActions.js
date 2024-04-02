
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
      .post('http://localhost:5000/getproductbyid', {productid})
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

export let filterProducts = (searchKey, sortKey, category) => {

  let filteredProducts

  return (dispatch) => {
    dispatch({ type: 'GET_PRODUCTS_REQUEST' });
    axios
      .get('http://localhost:5000/getallproducts')
      .then((res) => {
        console.log(res.data);

        filteredProducts = res.data;

        if (searchKey) {
          filteredProducts = res.data.filter((product) => {
           return product.name.toLowerCase().includes(searchKey)
          }
          )
        }

        if (sortKey !== 'popular') {
            if (sortKey == 'htl') {
              filteredProducts = res.data.sort((a, b) => {
                return b.price - a.price;
              });
            } else {
              filteredProducts = res.data.sort((a, b) => {
                return a.price - b.price;
              });
            }
        } 
      
        if (category !=='all') {
          filteredProducts = res.data.filter((product) =>
            product.category.toLowerCase().includes(category)
          );
        }
        dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: filteredProducts });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: 'GET_PRODUCTS_FAILURE', payload: error.message });
      });
  };
};
