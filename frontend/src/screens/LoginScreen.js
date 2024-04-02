import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginUser } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../components/Error';
import Spinner from '../components/Spinner';

function LoginScreen() {
  let loginUserState = useSelector((state) => state.loginUserReducer);
  // let { error,loading, success } = loginUserState

  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');

  // console.log(loginuserstate)

  // var [token, setToken] = useState(null);

  var navigate = useNavigate();
 let dispatch = useDispatch()

  var submitHandler =  (e) => {
    e.preventDefault();
    let userdata = {
      email,
      password,
    };
    dispatch(loginUser(userdata))
     if (loginUserState.success) {
       navigate('/');
     }
  }

 
  //   axios
  //     .post('http://localhost:5000/login', userdata)
  //     .then((res) => {
  //       console.log(res.data.token)
        // localStorage.setItem('jwt-token', res.data.token);
        // setToken(localStorage.getItem('jwt-token'));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // if (token) {
  //   return navigate('/profile');
  // }

  return (
    <div className='container mt-4'>
      <div className='row'>
        <h2 className='text-center fs-4'>Login</h2>
        {loginUserState.loading && (<Spinner/>)}
        {loginUserState.error && (<Error error='Credentials not matched'/>)}
        <div className='col-4 m-auto my-4 bg-secondary px-4 py-3 text-white fs-5 rounded'>
          <form onSubmit={submitHandler}>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email'
                className='form-control'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type='submit'
              className='btn btn-primary w-100 fs-5 fw-medium'
            >
              Login
            </button>
          </form>
          <p className='pt-3 text-center'>
            Don't have account?
            <Link to='/signup' className='text-warning fs-5 fw-medium px-2'>
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
