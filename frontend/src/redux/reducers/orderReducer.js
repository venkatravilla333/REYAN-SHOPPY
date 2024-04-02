

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
        success: true,
      };
      break;
    case 'PLACE_ORDER_FAILURE':
      return {
        ...state,
        loading: false,
        error: true,
      };
      break;
    default:
      return state
  }
}