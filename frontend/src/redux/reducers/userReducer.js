

export let signUpUserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_SIGNUP_REQUEST':
      return {
        ...state,
        loading: true,
      }
      break;
    case 'USER_SIGNUP_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
        
      }
      break;
    case 'USER_SIGNUP_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
      break;
    default:
      return state
    
  } 
}