import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import ProductDescription from './screens/ProductDescription';
import Login from './components/Login';
import Cart from './components/Cart';
import Signup from './components/Signup';
import { useState } from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';


function App() {

  return (
    <Provider store={store}>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/product/:id' element={<ProductDescription/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
