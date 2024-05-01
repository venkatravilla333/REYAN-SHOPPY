

export let placeOrderReducer = (state={}, action) => {
  switch (action.type) {
    case 'PLACE_ORDER_REQUEST':
      return {
        ...state,
        loading: true,
      };
      break;
    case 'PLACE_ORDER_SUCCESS':
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
      break;
    case 'PLACE_ORDER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      break;
    default:
      return state
  }
}
export let paymentReducer = (state={}, action) => {
  switch (action.type) {
    case 'PAYMENT_REQUEST':
      return {
        ...state,
        loading: true,
      };
      break;
    case 'PAYMENT_SUCCESS':
      return {
        ...state,
        loading: false,
        success: action.payload,
      };
      break;
    case 'PAYMENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      break;
    default:
      return state
  }
}