import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import ProductDescription from './screens/ProductDescription';

import { useState } from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';


function App() {

  return (
    <Provider store={store}>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/product/:id' element={<ProductDescription/>} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/signup' element={<SignupScreen />} />
          <Route path='/cart' element={<CartScreen />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
