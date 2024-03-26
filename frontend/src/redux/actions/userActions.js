import axios from "axios"


export let signUpUser = (userdata) => {
  return (dispatch) => {
    dispatch({ type: 'USER_SIGNUP_REQUEST' })
    axios
      .post('http://localhost:5000/signup', userdata)
      .then((res) => {
        console.log(res.data)
        dispatch({type: 'USER_SIGNUP_SUCCESS'})
    })
      .catch((err) => {
        console.log(err)
        dispatch({type: 'USER_SIGNUP_FAILURE', payload: err})
    })
    
  }
}