import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import {useDispatch} from 'react-redux'
import { signUpUser } from '../redux/actions/userActions';

function SignupScreen() {
  var [username, setUsername] = useState('');
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var [confirmpassword, setConfirmpassword] = useState('');

   let dispatch = useDispatch()
  let navigate = useNavigate()
  
  var submitHandler = (e) => {
    e.preventDefault();
    var userdata = {
      username,
      email,
      password,
      confirmpassword,
    };

    if (password == confirmpassword) {
      dispatch(signUpUser(userdata))
      navigate('/login')
      
    } else {
      alert('Passwords not matched')
    }

  //   axios
  //     .post('http://localhost:5000/signup', data)
  //     .then((res) => {
  //       console.log(res);
  //       navigate('/login');
  //     })
  //     .catch(() => {});
  };

  return (
    <div className='container mt-4'>
      <div className='row'>
        <h2 className='text-center fs-4'>Signup</h2>
        <div className='col-4 m-auto my-4 bg-secondary px-4 py-3 text-white fs-5 rounded'>
          <form onSubmit={submitHandler}>
            <div className='mb-3'>
              <label htmlFor='username' className='form-label'>
                User name
              </label>
              <input
                type='text'
                className='form-control'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
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
            <div className='mb-3'>
              <label htmlFor='cpassword' className='form-label'>
                Confirm password
              </label>
              <input
                type='password'
                className='form-control'
                id='cpassword'
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
                required
              />
            </div>
            <button
              type='submit'
              className='btn btn-primary w-100 fs-5 fw-medium'
            >
              Register
            </button>
          </form>
          <p className='pt-3 text-center'>
            Have already account?
            <Link to='/login' className='text-warning fs-5 px-2 fw-medium'>
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupScreen;
