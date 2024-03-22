

let initialState = {
  loading: false,
  products: [],
  error: ''
}

export let getAllProductsReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_REQUEST':
      return {
        loading: true
      }
      break;
    case 'GET_PRODUCTS_SUCCESS':
      return {
        loading: false,
        products: action.payload
      }
      break;
    case 'GET_PRODUCTS_FAILURE':
      return {
        loading: false,
        error: action.payload
      }
      break;
    default:
      return state
    
  }
}