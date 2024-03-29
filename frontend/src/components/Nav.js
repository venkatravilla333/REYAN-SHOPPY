import React from 'react'

import logo from '../images/logo-999.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Nav() {
  let cartState = useSelector((state) => state.cartReducer)
  let userState = useSelector((state) => state.loginUserReducer)
  let state = useSelector((state) => state)
  console.log(state)

  let { userdata } = userState
  let {username} = userdata
  
  
  let { cartItems } = cartState
  // console.log(userState)
 
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
        <div className='container-fluid'>
          <Link to='./'>
            <img
              src={logo}
              alt=''
              width='45px'
              height='45px'
              className='me-md-3'
            />
          </Link>
          <Link to='/' className='navbar-brand fs-3 fw-medium' href='#'>
            Reyan Store
          </Link>
          <button 
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav ms-auto align-items-center'>
              {username ? (
                <div className='dropdown pe-2'>
                  <button
                    className='btn btn-dark'
                    type='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <i 
                      style={{ backgroundColor: 'transparent' }}
                      className='bi bi-person-circle'
                    ><span style={{paddingLeft:'8px', fontSize:'18px', fontStyle:'normal'}}>{username}</span></i>
                  </button>
                  <ul className='dropdown-menu mt-3'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Orders
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  to='/login'
                  className='nav-link text-white fw-medium me-2'
                  aria-current='page'
                >
                  Login
                </Link>
              )}
              )
              <Link to='/cart' className='nav-link text-white fw-medium'>
                <i className='bi bi-cart2 fs-4'></i> {cartItems.length}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav