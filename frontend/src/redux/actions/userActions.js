import axios from "axios"
import { useNavigate } from "react-router-dom"


export let signUpUser = (userdata) => {

  return (dispatch) => {
    dispatch({ type: 'USER_SIGNUP_REQUEST' })
    axios
      .post('http://localhost:5000/signup', userdata)
      .then((res) => {
        console.log(res.data)
        dispatch({ type: 'USER_SIGNUP_SUCCESS' })
    })
      .catch((err) => {
        console.log(err)
        dispatch({type: 'USER_SIGNUP_FAILURE', payload: err})
    })
    
  }
}
export let loginUser = (userdata) => {

  return (dispatch) => {
    dispatch({ type: 'USER_LOGIN_REQUEST' })
    axios
      .post('http://localhost:5000/login', userdata)
      .then((res) => {
        console.log(res.data)
        dispatch({ type: 'USER_LOGIN_SUCCESS' })
    })
      .catch((err) => {
        console.log(err)
        dispatch({type: 'USER_LOGIN_FAILURE', payload: err})
    })
    
  }
}